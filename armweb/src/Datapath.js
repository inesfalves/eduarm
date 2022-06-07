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

  const setLatency = (event, node) => {
    if (props.compiling) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
      let latencyInput = nodeElement.getElementsByClassName("latencyNode");
      let component = props.cpuState.find((x) => x.id === node.id);
      latencyInput[0].innerHTML =
        "<div className='container'><input type=' text ' name=' input ' value=" +
        component.latency +
        " /></div>";
      latencyInput[0].style.opacity = 1;
    }
  };

  const showNodeInformation = (event, node) => {
    if (props.executed) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
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
                inp.id + ": " + inp.data.value.toString(16) + " ";
              break;
            case "BIN":
              tooltipInpText +=
                inp.id + ": " + inp.data.value.toString(2) + " ";
              break;
            default:
              tooltipInpText += inp.id + ": " + inp.data.value + " ";
              break;
          }
        }
        for (let out of Object.values(componentOutputs)) {
          switch (props.numberFormat) {
            case "HEX":
              tooltipOutText +=
                out.id + ": " + out.data.value.toString(16) + " ";
              break;
            case "BIN":
              tooltipOutText +=
                out.id + ": " + out.data.value.toString(2) + " ";
              break;
            default:
              tooltipOutText += out.id + ": " + out.data.value + " ";
              break;
          }
        }
        switch (props.numberFormat) {
          case "HEX":
            tooltipLatText = component.latency.toString(16) + " ";
            break;
          case "BIN":
            tooltipLatText = component.latency.toString(2) + " ";
            break;
          default:
            tooltipLatText = component.latency + " ";
            break;
        }
        tooltips[0].innerHTML =
          "<div className='container'><div className='row'> Latency: " +
          tooltipLatText +
          "</div><div className='row'> Inputs: " +
          tooltipInpText +
          "</div><div className='row'>Outputs: " +
          tooltipOutText +
          "</div></div>";
        tooltips[0].style.opacity = 1;
      }
    }
  };

  const hideNodeInformation = (event, node) => {
    let nodeElement = document.querySelector(`[data-id=${node.id}`);
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

  return (
    // <ReactFlow
    //   nodeTypes={nodeTypes}
    //   nodes={nodes}
    //   edges={edges}
    //   onInit={createTooltips}
    //   onNodeMouseEnter={showNodeInformation}
    //   onNodeMouseLeave={hideNodeInformation}
    //   defaultZoom="1.04"
    // />
    <div
      style={{
        height: 35.5 + "em",
        width: 63.3 + "em",
        maxHeight: 35.5 + "em",
        maxWidth: 80 + "em",
      }}
    >
      <div className="container px-0">
        <div
          className="row pb-0 mb-0"
          style={{
            height: 1 + "em",
          }}
        >
          <button type="button" className="btn btn-sm btn-outline-info col-3">
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
          <button type="button" className="btn btn-sm btn-outline-danger col-2">
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
          onlyRenderVisibleElements={true}
          nodes={plNodes}
          edges={plEdges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={showNodeInf}
          panOnDrag={false}
          defaultZoom="0.85"
        />
      </ReactFlowProvider>
    </div>
  );
  // return (
  //   <ReactFlow
  //     nodeTypes={nodeTypes}
  //     nodes={nodes}
  //     edges={edges}
  //     onInit={createTooltips}
  //     onNodeMouseEnter={showNodeInformation}
  //     onNodeMouseLeave={hideNodeInformation}
  //     onNodeClick={setLatency}
  //     defaultZoom="1.04"
  //   />
  // );
}

export default Datapath;
