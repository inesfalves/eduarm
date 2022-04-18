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
    let component = props.cpuState.find((x) => x.id === node.id);
    let componentInputs = component.inputs;
    let componentOutputs = component.outputs;
    console.log(componentInputs);
  };

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodeClick={showNodeInformation}
      defaultZoom="1.04"
    />
  );
}

export default Datapath;
