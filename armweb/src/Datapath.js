import ReactFlow, { useNodesState, useEdgesState } from "react-flow-renderer";
import { DiagramUtils } from "./DiagramUtils";

const {
  nodes: initialNodes,
  edges: initialEdges,
  customNodeTypes: nodeTypes,
} = DiagramUtils();
const axios = require("axios");

function Datapath() {
  const getMatchingComponent = async (componentId) => {
    await axios
      .get("http://localhost:3001/getNode/" + componentId)
      .then(function (res) {
        console.log(res.data);
      });
  };

  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  const showNodeInformation = (event, node) => {
    getMatchingComponent(node.id);
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
