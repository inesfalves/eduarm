import axios from "axios";
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
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  const [plNodes, setNodes, onNodesChange] = useNodesState(pipeNodes);
  const [plEdges, setEdges, onEdgesChange] = useEdgesState(pipeEdges);
  const [editingLatency, setEditingLatency] = useState(false);
  const [componentLatency, setComponentLatency] = useState(0);
  const [componentID, setComponentID] = useState("");

  useEffect(() => {
    if (props.executed) {
      colorLines(props.relevantLines);
    }
  }, [props.relevantLines]);

  useEffect(() => {
    if (props.executed) {
      axios
        .get(
          "http://localhost:3001/recalculateLatency/" +
            componentLatency +
            "/" +
            componentID
        )
        .then(function (res) {
          props.setCpuState(res.data);
        });
    }
  }, [componentLatency]);

  const colorLines = (lines) => {
    for (let e of edges) {
      for (let l of lines) {
        if (e.source === l[0].component && e.target === l[1].component) {
          e.style = { stroke: "grey" };
        }
      }
    }
  };

  const changeLatency = (component, node, event) => {
    setComponentID(component.id);
    let nodeElement = document.querySelector(`[data-id=${node.id}`);
    let latencyInput = nodeElement.getElementsByClassName("latencyNode");
    latencyInput[0].innerHTML = "";
    setComponentLatency(event.target.value);
    setEditingLatency(false);
  };

  const setLatency = (event, node) => {
    console.log(editingLatency);
    if (props.compiling && !editingLatency) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
      let latencyInput = nodeElement.getElementsByClassName("latencyNode");
      console.log(latencyInput);
      let component = props.cpuState.find((x) => x.id === node.id);
      latencyInput[0].innerHTML =
        "<div className='container'><input type=' text ' name=' input ' value=" +
        component.latency +
        " /></div>";
      latencyInput[0].style.opacity = 1;
      latencyInput[0].style.position = "absolute";
      latencyInput[0].style.zIndex = 2000;
      let input = latencyInput[0].getElementsByTagName("input")[0];
      input.addEventListener(
        "change",
        changeLatency.bind(null, component, node)
      );
      input.style.width = "3em";
      setEditingLatency(true);
    }
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
        for (let inp of Object.values(componentInputs)) {
          switch (props.numberFormat) {
            case "HEX":
              tooltipInpText +=
                inp.id + ": " + inp.data.value.toString(16) + "\n";
              break;
            case "BIN":
              tooltipInpText +=
                inp.id + ": " + inp.data.value.toString(2) + "\n";
              break;
            default:
              tooltipInpText += inp.id + ": " + inp.data.value + "\n";
              break;
          }
        }
        for (let out of Object.values(componentOutputs)) {
          switch (props.numberFormat) {
            case "HEX":
              tooltipOutText +=
                out.id + ": " + out.data.value.toString(16) + "\n";
              break;
            case "BIN":
              tooltipOutText +=
                out.id + ": " + out.data.value.toString(2) + "\n";
              break;
            default:
              tooltipOutText += out.id + ": " + out.data.value + "\n";
              break;
          }
        }
        switch (props.numberFormat) {
          case "HEX":
            tooltipLatText = component.totalLatency.toString(16) + "\n";
            break;
          case "BIN":
            tooltipLatText = component.totalLatency.toString(2) + "\n";
            break;
          default:
            tooltipLatText = component.totalLatency + "\n";
            break;
        }
        tooltips[0].innerHTML =
          "<div className='container'><div className='row'> Latency: " +
          tooltipLatText +
          "</div><div className='row'>Inputs</div><div className='row'>" +
          tooltipInpText +
          "</div><div className='row'>Outputs</div><div className='row'>" +
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

  // return (
  //   <div
  //     style={{
  //       height: 35.5 + "em",
  //       width: 63.3 + "em",
  //       maxHeight: 35.5 + "em",
  //       maxWidth: 80 + "em",
  //     }}
  //   >
  //     <div className="container px-0">
  //       <div
  //         className="row pb-0 mb-0"
  //         style={{
  //           height: 1 + "em",
  //         }}
  //       >
  //         <button type="button" className="btn btn-sm btn-outline-info col-3">
  //           IF
  //         </button>
  //         <button
  //           type="button"
  //           className="btn btn-sm btn-outline-success col-3"
  //         >
  //           ID
  //         </button>
  //         <button
  //           type="button"
  //           className="btn btn-sm btn-outline-warning col-3"
  //         >
  //           EX
  //         </button>
  //         <button type="button" className="btn btn-sm btn-outline-danger col-2">
  //           MEM
  //         </button>
  //         <button
  //           type="button"
  //           className="btn btn-sm btn-outline-primary col-1"
  //         >
  //           WB
  //         </button>
  //       </div>
  //     </div>
  //     <ReactFlowProvider>
  //       <ReactFlow
  //         onlyRenderVisibleElements={true}
  //         nodes={plNodes}
  //         edges={plEdges}
  //         nodeTypes={nodeTypes}
  //         onNodesChange={onNodesChange}
  //         onEdgesChange={onEdgesChange}
  //         onNodeClick={showNodeInf}
  //         panOnDrag={false}
  //         defaultZoom="0.85"
  //       />
  //     </ReactFlowProvider>
  //   </div>
  // );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onInit={createTooltips}
      onNodeMouseEnter={showNodeInformation}
      onNodeMouseLeave={hideNodeInformation}
      onNodeClick={setLatency}
      defaultZoom="1.04"
    />
  );
}

export default Datapath;
