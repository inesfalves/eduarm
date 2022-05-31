import { useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState } from "react-flow-renderer";
import { DiagramUtils } from "./DiagramUtils";

const {
  nodes: initialNodes,
  edges: initialEdges,
  customNodeTypes: nodeTypes,
} = DiagramUtils();

function Datapath(props) {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

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
          switch (props.numberFormat) {
            case "HEX":
              tooltipInpText +=
                inp.id + ": " + inp.data.value.toString(16) + " ";
              break;
            case "BIN":
              tooltipInpText +=
                inp.id + ": " + inp.data.value.toString(2) + " ";
              break;
            case "DEC":
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
            case "DEC":
              tooltipOutText += out.id + ": " + out.data.value + " ";
              break;
          }
        }
        tooltips[0].innerHTML =
          "<div className='container'><div className='row'> Inputs: " +
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
      tooltip.className = "tooltipNode";
      tooltip.style.opacity = 0;
      nodeElement.appendChild(tooltip);
    }
  };
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
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
