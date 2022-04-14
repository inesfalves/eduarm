import { useState, useMemo, useEffect } from "react";
import ReactFlow from "react-flow-renderer";
import { Handle, Position } from "react-flow-renderer";
const axios = require("axios");

const handleStyle = { top: 10 };

function CustomNode({ data }) {
  return (
    <div className="custom-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} id="a" />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={handleStyle}
      />
    </div>
  );
}

function ForkNode({ data }) {
  return (
    <div className="fork-node">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

function ForkNodeSecond({ data }) {
  return (
    <div className="fork-node">
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

function SignExtendDist({ data }) {
  return (
    <div className="fork-node">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

function ALUControlNode({ data }) {
  return (
    <div className="alucontrol-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function ALUNode({ data }) {
  return (
    <div className="alu-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 30 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 60 }}
      />
      <Handle type="target" position={Position.Bottom} id="c" />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 30 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 60 }}
      />
    </div>
  );
}

function MuxNode({ data }) {
  return (
    <div className="mux-node">
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function AndNode({ data }) {
  return (
    <div className="alucontrol-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function AddNode({ data }) {
  return (
    <div className="add-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 40 }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function DistributorNode({ data }) {
  return (
    <div className="distributor-node">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 35 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 60 }}
      />
      <Handle type="source" position={Position.Bottom} id="e" />
    </div>
  );
}

function RegBankNode({ data }) {
  return (
    <div className="regbank-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 65 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 105 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 140 }}
      />
      <Handle type="target" position={Position.Top} id="f" />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 50 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 100 }}
      />
    </div>
  );
}

function DataMemoryNode({ data }) {
  return (
    <div className="datamemory-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 30 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 60 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle type="target" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function ControlNode({ data }) {
  return (
    <div className="control-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 20 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 30 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 50 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="f"
        style={{ top: 60 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="g"
        style={{ top: 70 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="h"
        style={{ top: 80 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="i"
        style={{ top: 90 }}
      />
    </div>
  );
}

const initialNodes = [
  {
    id: "PC",
    data: { label: "PC" },
    position: { x: 20, y: 300 },
    style: { height: 70 + "px", width: 70 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "PCounterFork",
    position: { x: 100, y: 330 },
    type: "forkNode",
  },
  {
    id: "PCAddFork",
    position: { x: 100, y: 200 },
    type: "forkNodeSecond",
  },
  {
    id: "AddPC",
    data: { label: "Add" },
    position: { x: 135, y: 50 },
    type: "addNode",
  },
  {
    id: "ShiftLeft",
    data: { label: "Shift Left" },
    position: { x: 550, y: 100 },
    style: { height: 30 + "px", width: 30 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "AddBranch",
    data: { label: "Add" },
    position: { x: 650, y: 60 },
    type: "addNode",
  },
  {
    id: "MuxTop",
    position: { x: 800, y: 30 },
    type: "muxNode",
  },
  {
    id: "And",
    position: { x: 790, y: 150 },
    data: { label: "And" },
    type: "andNode",
  },
  {
    id: "InsMem",
    data: { label: "Instruction Memory" },
    position: { x: 140, y: 273 },
    style: { height: 125 + "px", width: 100 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "InsDistributor",
    position: { x: 275, y: 295 },
    type: "distributorNode",
  },
  {
    id: "InsFork",
    position: { x: 350, y: 350 },
    type: "forkNode",
  },
  {
    id: "MuxIns",
    position: { x: 390, y: 285 },
    type: "muxNode",
  },
  {
    id: "RegBank",
    data: { label: "Register Bank" },
    position: { x: 450, y: 250 },
    type: "regBankNode",
  },
  {
    id: "SignExtendDist",
    position: { x: 400, y: 440 },
    type: "signExtendDist",
  },
  {
    id: "SignExtend",
    data: { label: "Sign Extend" },
    position: { x: 470, y: 420 },
    style: { height: 50 + "px", width: 50 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "RegMuxFork1",
    position: { x: 580, y: 330 },
    type: "signExtendDist",
  },
  {
    id: "RegMuxFork2",
    position: { x: 600, y: 370 },
    type: "forkNodeSecond",
  },
  {
    id: "Control",
    data: { label: "Control" },
    position: { x: 290, y: 135 },
    type: "controlNode",
  },
  {
    id: "MuxReg",
    position: { x: 650, y: 330 },
    type: "muxNode",
  },
  {
    id: "ALUControl",
    data: { label: "ALU Control" },
    position: { x: 660, y: 460 },
    type: "aluControlNode",
  },
  {
    id: "ALU",
    data: { label: "ALU" },
    position: { x: 710, y: 270 },
    type: "aluNode",
  },
  {
    id: "ALUFork",
    position: { x: 790, y: 325 },
    type: "signExtendDist",
  },
  {
    id: "DataMemory",
    data: { label: "Data Memory" },
    position: { x: 830, y: 300 },
    type: "dataMemoryNode",
  },
  {
    id: "MuxMem",
    position: { x: 950, y: 350 },
    type: "muxNode",
  },
];

const initialEdges = [
  { id: "e1", source: "PC", target: "PCounterFork", type: "smoothstep" },
  {
    id: "e2",
    source: "PCounterFork",
    target: "PCAddFork",
    type: "smoothstep",
    sourceHandle: "a",
  },
  {
    id: "e3",
    source: "PCounterFork",
    target: "InsMem",
    type: "smoothstep",
    sourceHandle: "b",
  },
  {
    id: "e4",
    source: "PCAddFork",
    sourceHandle: "a",
    target: "AddPC",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e5",
    source: "PCAddFork",
    sourceHandle: "b",
    target: "AddBranch",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e6",
    source: "AddPC",
    target: "MuxTop",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e7",
    source: "AddBranch",
    targetHandle: "b",
    target: "MuxTop",
    type: "smoothstep",
  },
  { id: "e8", source: "MuxTop", target: "PC", type: "smoothstep" },

  {
    id: "e9",
    source: "InsDistributor",
    sourceHandle: "a",
    target: "Control",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e10",
    source: "InsDistributor",
    sourceHandle: "b",
    targetHandle: "a",
    target: "RegBank",
    type: "smoothstep",
  },
  {
    id: "e11",
    source: "InsDistributor",
    sourceHandle: "c",
    targetHandle: "a",
    target: "MuxIns",
    type: "smoothstep",
  },
  {
    id: "e12",
    source: "InsDistributor",
    sourceHandle: "d",
    target: "InsFork",
    type: "smoothstep",
  },
  {
    id: "e13",
    source: "InsDistributor",
    sourceHandle: "e",
    target: "SignExtendDist",
    type: "smoothstep",
  },
  {
    id: "e14",
    source: "InsFork",
    sourceHandle: "a",
    targetHandle: "b",
    target: "MuxIns",
    type: "smoothstep",
  },
  {
    id: "e15",
    source: "InsFork",
    sourceHandle: "b",
    targetHandle: "c",
    target: "RegBank",
    type: "smoothstep",
  },
  {
    id: "e16",
    source: "SignExtendDist",
    sourceHandle: "a",
    target: "SignExtend",
    type: "smoothstep",
  },
  {
    id: "e17",
    source: "SignExtendDist",
    sourceHandle: "b",
    target: "ALUControl",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e18",
    source: "SignExtend",
    target: "RegMuxFork2",
    type: "smoothstep",
  },
  {
    id: "e19",
    source: "RegMuxFork2",
    sourceHandle: "b",
    target: "MuxReg",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e20",
    source: "RegMuxFork1",
    sourceHandle: "a",
    target: "MuxReg",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e21",
    source: "RegMuxFork1",
    sourceHandle: "b",
    target: "DataMemory",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e22",
    source: "RegMuxFork2",
    sourceHandle: "a",
    target: "ShiftLeft",
    type: "smoothstep",
  },
  {
    id: "e23",
    source: "ShiftLeft",
    target: "AddBranch",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e24",
    source: "RegBank",
    sourceHandle: "a",
    targetHandle: "a",
    target: "ALU",
    type: "smoothstep",
  },
  {
    id: "e25",
    source: "RegBank",
    sourceHandle: "b",
    target: "RegMuxFork1",
    type: "smoothstep",
  },
  {
    id: "e26",
    source: "MuxReg",
    targetHandle: "b",
    target: "ALU",
    type: "smoothstep",
  },
  {
    id: "e27",
    source: "ALU",
    sourceHandle: "b",
    target: "ALUFork",
    type: "smoothstep",
  },
  {
    id: "e28",
    source: "ALUFork",
    sourceHandle: "a",
    target: "DataMemory",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e29",
    source: "ALUFork",
    sourceHandle: "b",
    target: "MuxMem",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e30",
    source: "DataMemory",
    target: "MuxMem",
    targetHandle: "a",
    type: "smoothstep",
  },
  {
    id: "e31",
    source: "MuxMem",
    target: "RegBank",
    targetHandle: "d",
    type: "smoothstep",
  },
  {
    id: "e32",
    source: "Control",
    sourceHandle: "a",
    targetHandle: "c",
    target: "MuxIns",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e33",
    source: "MuxIns",
    target: "RegBank",
    targetHandle: "b",
    type: "smoothstep",
  },
  {
    id: "e34",
    source: "Control",
    sourceHandle: "b",
    target: "And",
    targetHandle: "a",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e35",
    source: "And",
    targetHandle: "c",
    target: "MuxTop",
    style: { stroke: "#00ADEE" },
    type: "smoothstep",
  },
  {
    id: "e36",
    source: "Control",
    sourceHandle: "c",
    target: "DataMemory",
    targetHandle: "d",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e37",
    source: "Control",
    sourceHandle: "d",
    target: "MuxMem",
    targetHandle: "c",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e38",
    source: "Control",
    sourceHandle: "e",
    target: "ALUControl",
    targetHandle: "b",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e39",
    source: "Control",
    sourceHandle: "f",
    target: "ALUControl",
    targetHandle: "b",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e40",
    source: "ALUControl",
    target: "ALU",
    targetHandle: "c",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e41",
    source: "ALU",
    sourceHandle: "a",
    target: "And",
    targetHandle: "b",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e42",
    source: "Control",
    sourceHandle: "g",
    target: "DataMemory",
    targetHandle: "c",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e43",
    source: "Control",
    sourceHandle: "h",
    target: "MuxReg",
    targetHandle: "c",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
  {
    id: "e44",
    source: "Control",
    sourceHandle: "i",
    targetHandle: "f",
    target: "RegBank",
    type: "smoothstep",
    style: { stroke: "#00ADEE" },
  },
];

function Datapath() {
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    await axios.get("http://localhost:3001/").then(function (res) {
      console.log(res);
    });
  };

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
      forkNode: ForkNode,
      forkNodeSecond: ForkNodeSecond,
      distributorNode: DistributorNode,
      muxNode: MuxNode,
      regBankNode: RegBankNode,
      signExtendDist: SignExtendDist,
      aluControlNode: ALUControlNode,
      controlNode: ControlNode,
      aluNode: ALUNode,
      andNode: AndNode,
      addNode: AddNode,
      dataMemoryNode: DataMemoryNode,
    }),
    []
  );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      defaultZoom="1.04"
    />
  );
}

export default Datapath;
