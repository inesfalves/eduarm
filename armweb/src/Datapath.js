import { useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";
import { DiagramUtils } from "./DiagramUtils";

const {
  nodes: initialNodes,
  edges: initialEdges,
  pipelineNodes: pipeNodes,
  pipelineEdges: pipeEdges,
  customNodeTypes: nodeTypes,
} = DiagramUtils();

function Datapath(props) {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [plNodes, setPipeNodes, onPipeNodesChange] = useNodesState(pipeNodes);
  const [plEdges, setPipeEdges, onPipeEdgesChange] = useEdgesState(pipeEdges);
  const [componentLatency, setComponentLatency] = useState(0);
  const [componentID, setComponentID] = useState("");

  useEffect(() => {
    paintControlLines();
  }, []);

  useEffect(() => {
    if (props.executed) {
      colorLines(props.relevantLines, "black");
      if (props.perfMode) {
        colorLines(props.criticalPath, "red", false);
      }
    }
  }, [props.perfMode, props.criticalPath, props.relevantLines]);

  // useEffect(() => {
  //   if (props.executed) {
  //     axios
  //       .get(
  //         "http://localhost:3001/recalculateLatency/" +
  //           componentLatency +
  //           "/" +
  //           componentID
  //       )
  //       .then(function (res) {
  //         props.setCpuState(res.data);
  //       });
  //   }
  // }, [componentLatency]);

  const paintControlLines = () => {
    for (let e of edges) {
      if (e.id.includes("Control")) {
        e.style = { stroke: "#00ADEE" };
      }
    }
  };

  const colorLines = (lines, color, overwrite = true) => {
    for (let e of edges) {
      let defaultColor = "#b1b1b7";
      if (e.id.includes("Control")) {
        defaultColor = "#00ADEE";
      }
      let splitID = e.id.split("/");

      let tempNodes = nodes;
      for (let l of lines) {
        if (splitID[0] === l[0].id && splitID[1] === l[1].id) {
          defaultColor = color;
          if (defaultColor !== "#b1b1b7" || overwrite) {
            let currentNode = nodes.find((x) => x.id === l[1].component);
            tempNodes = tempNodes.map((node) => {
              if (node.id === currentNode.id) {
                node.style = {
                  ...node.style,
                  borderColor: defaultColor,
                };
                node.data = {
                  ...node.data,
                  borderColor: defaultColor,
                };
              }

              return node;
            });

            setNodes(tempNodes);
          }
        }
      }

      if (e.target.includes("Aux") || e.target.includes("Fork")) {
        if (defaultColor !== "#b1b1b7" || overwrite) {
          tempNodes = tempNodes.map((node) => {
            if (node.id === e.target) {
              node.style = {
                ...node.style,
                borderColor: defaultColor,
              };
              node.data = {
                ...node.data,
                borderColor: defaultColor,
              };
            }

            return node;
          });
        }
      }

      if (defaultColor !== "#b1b1b7" || overwrite) {
        e.style = { stroke: defaultColor };
      }
    }
  };

  // const changeLatency = (component, node, event) => {
  //   setComponentID(component.id);
  //   let nodeElement = document.querySelector(`[data-id=${node.id}`);
  //   let latencyInput = nodeElement.getElementsByClassName("latencyNode");
  //   latencyInput[0].innerHTML = "";
  //   setComponentLatency(event.target.value);
  //   setEditingLatency(false);
  // };

  // const setLatency = (event, node) => {
  //   if (props.executed && !editingLatency) {
  //     let nodeElement = document.querySelector(`[data-id=${node.id}`);
  //     let latencyInput = nodeElement.getElementsByClassName("latencyNode");
  //     let component = props.cpuState.find((x) => x.id === node.id);
  //     latencyInput[0].innerHTML =
  //       "<div className='container'><input type=' text ' name=' input ' value=" +
  //       component.latency +
  //       " /></div>";
  //     latencyInput[0].style.opacity = 1;
  //     latencyInput[0].style.position = "absolute";
  //     latencyInput[0].style.zIndex = 2000;
  //     let input = latencyInput[0].getElementsByTagName("input")[0];
  //     input.addEventListener(
  //       "change",
  //       changeLatency.bind(null, component, node)
  //     );
  //     input.style.width = "3em";
  //     setEditingLatency(true);
  //   }
  // };

  const changeNumberFormat = (numbers) => {
    let tooltipText = "";
    for (let num of Object.values(numbers)) {
      if (typeof num.data.value === "object") {
        tooltipText += num.id + ": " + JSON.stringify(num.data.value) + "\n";
        continue;
      }
      switch (props.numberFormat) {
        case "HEX":
          tooltipText +=
            num.id + ": " + (num.data.value >>> 0).toString(16) + "\n";
          break;
        case "BIN":
          tooltipText +=
            num.id + ": " + (num.data.value >>> 0).toString(2) + "\n";
          break;
        default:
          tooltipText += num.id + ": " + num.data.value + "\n";
          break;
      }
    }
    return tooltipText;
  };

  const showNodeInformation = (event, node) => {
    if (props.executed) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
      nodeElement.style.zIndex = 1;
      let tooltips = nodeElement.getElementsByClassName("tooltipNode");
      if (tooltips.length !== 0) {
        let component = props.cpuState.find((x) => x.id === node.id);
        let tooltipInpText = "",
          tooltipOutText = "",
          tooltipLatText = "";
        let componentInputs = component.inputs;
        let componentOutputs = component.outputs;
        tooltipInpText = changeNumberFormat(componentInputs);
        tooltipOutText = changeNumberFormat(componentOutputs);
        if (props.cpuVer === "Unicycle") {
          tooltipLatText = component.totalLatency + "\n";
          tooltips[0].innerHTML =
            "<div className='container'><div className='row'> Latency: " +
            tooltipLatText +
            "</div>";
        }
        tooltips[0].innerHTML +=
          "<div className='row' style='text-decoration: underline'>Inputs</div><div className='row'>" +
          tooltipInpText +
          "</div><div className='row' style='text-decoration: underline'>Outputs</div><div className='row'>" +
          tooltipOutText +
          "</div></div>";

        tooltips[0].style.opacity = 1;
        tooltips[0].style.whiteSpace = "pre";
      }
    }
  };

  const hideNodeInformation = (event, node) => {
    let nodeElement = document.querySelector(`[data-id=${node.id}`);
    nodeElement.style.zIndex = 0;
    let tooltips = nodeElement.getElementsByClassName("tooltipNode");
    if (tooltips.length !== 0) {
      tooltips[0].innerHTML = "";
      tooltips[0].style.opacity = 0;
    }
  };

  const createTooltips = (instance) => {
    paintControlLines(instance);
    let localNodes = instance.getNodes();
    for (let node of localNodes) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
      if (
        nodeElement.className.includes("fork") ||
        nodeElement.className.includes("Aux") ||
        nodeElement.className.includes("distributor") ||
        nodeElement.className.includes("Dist")
      ) {
        continue;
      }
      let tooltip = document.createElement("div");
      let latencySet = document.createElement("div");
      latencySet.className = "latencyNode";
      tooltip.className = "tooltipNode";
      latencySet.style.opacity = 0;
      tooltip.style.opacity = 0;
      nodeElement.appendChild(latencySet);
      nodeElement.appendChild(tooltip);
    }
  };

  const showNodeInf = (event, node) => {
    console.log(node);
  };

  return (
    <>
      {props.cpuVer === "Unicycle" ? (
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onInit={createTooltips}
          onNodeMouseEnter={showNodeInformation}
          onNodeMouseLeave={hideNodeInformation}
          nodesConnectable={false}
          nodesDraggable={false}
          //onNodeClick={setLatency}
          defaultZoom="1.02"
        />
      ) : (
        <div
          style={{
            height: 75 + "vh",
            width: 66.5 + "vw",
            maxWidth: 70 + "vw",
          }}
        >
          <div className="container px-0">
            <div
              className="row pb-0 m-0 w-100"
              style={{
                height: 1 + "em",
              }}
            >
              <button
                type="button"
                className="btn btn-sm btn-outline-info col-3"
              >
                IF
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-success col-3"
              >
                ID
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-warning col-3"
              >
                EX
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger col-2"
              >
                MEM
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary col-1"
              >
                WB
              </button>
            </div>
          </div>
          <ReactFlowProvider>
            <ReactFlow
              nodes={plNodes}
              edges={plEdges}
              nodeTypes={nodeTypes}
              onInit={createTooltips}
              onNodeMouseEnter={showNodeInformation}
              onNodeMouseLeave={hideNodeInformation}
              onNodeClick={showNodeInf}
              nodesConnectable={false}
              nodesDraggable={false}
              defaultZoom="0.84"
            />
          </ReactFlowProvider>
        </div>
      )}
    </>
  );
}

export default Datapath;
