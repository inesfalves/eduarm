import ReactFlow, { useNodesState, useEdgesState } from "react-flow-renderer";
import { DiagramUtils } from "./DiagramUtils";
import { useMemo } from "react";

const {
  nodes: initialNodes,
  edges: initialEdges,
  customNodeTypes: nodeTypes,
} = DiagramUtils();

function Datapath(props) {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  const newnodeTypes = useMemo(() => nodeTypes, []);

  const showNodeInformation = (event, node) => {
    if (props.executed) {
      let nodeElement = document.querySelector(`[data-id=${node.id}`);
      let tooltips = nodeElement.getElementsByClassName("tooltipNode");
      if (tooltips.length !== 0) {
        let component = props.cpuState.find((x) => x.id === node.id);
        let tooltipInpText = "",
          tooltipOutText = "";
        let componentInputs = component.inputs;
        let componentOutputs = component.outputs;
        for (let inp of Object.values(componentInputs)) {
          tooltipInpText += inp.id + ": " + inp.data.value + " ";
        }
        for (let out of Object.values(componentOutputs)) {
          tooltipOutText += out.id + ": " + out.data.value + " ";
        }
        tooltips[0].innerHTML =
          "<div className='container'><div className='row'> Inputs: " +
          tooltipInpText +
          "</div><div className='row'>Outputs: " +
          tooltipOutText +
          "</div></div>";
      }
    }
  };

  const hideNodeInformation = (event, node) => {
    let nodeElement = document.querySelector(`[data-id=${node.id}`);
    let tooltips = nodeElement.getElementsByClassName("tooltipNode");
    if (tooltips.length !== 0) {
      tooltips[0].innerHTML = "";
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
      tooltip.className = "tooltipNode";
      tooltip.style.opacity = 0;
      nodeElement.appendChild(tooltip);
    }
  };
  return (
    <ReactFlow
      nodeTypes={newnodeTypes}
      nodes={nodes}
      edges={edges}
      onInit={createTooltips}
      onNodeMouseEnter={showNodeInformation}
      onNodeMouseLeave={hideNodeInformation}
      defaultZoom="1.04"
    />
  );
}

export default Datapath;
