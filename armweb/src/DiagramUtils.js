import { Handle, Position } from "react-flow-renderer";

function ForkNode({ data }) {
  return (
    <div className="fork-node">
      <Handle className="side-node" type="target" position={Position.Left} />
      <Handle
        className="top-node"
        type="source"
        position={Position.Top}
        id="a"
      />
      <Handle
        className="side-node"
        type="source"
        position={Position.Right}
        id="b"
      />
    </div>
  );
}

function PCAuxNode({ data }) {
  return (
    <div className="aux-node">
      <Handle className="side-node" type="source" position={Position.Left} />
      <Handle className="top-node" type="target" position={Position.Bottom} />
    </div>
  );
}

function PCTopAuxNode({ data }) {
  return (
    <div className="aux-node">
      <Handle className="top-node" type="source" position={Position.Bottom} />
      <Handle className="side-node" type="target" position={Position.Right} />
    </div>
  );
}

function MemAuxNode({ data }) {
  return (
    <div className="aux-node">
      <Handle className="side-node" type="source" position={Position.Left} />
      <Handle className="top-node" type="target" position={Position.Top} />
    </div>
  );
}

function MemLeftAuxNode({ data }) {
  return (
    <div className="aux-node">
      <Handle className="top-node" type="source" position={Position.Top} />
      <Handle className="side-node" type="target" position={Position.Right} />
    </div>
  );
}

function ControlMemAuxNode({ data }) {
  return (
    <div className="control-aux-node">
      <Handle className="top-node" type="target" position={Position.Top} />
      <Handle className="side-node" type="source" position={Position.Right} />
    </div>
  );
}

function ForkNodeSecond({ data }) {
  return (
    <div className="fork-node">
      <Handle type="target" className="top-node" position={Position.Bottom} />
      <Handle
        type="source"
        className="top-node"
        position={Position.Top}
        id="a"
      />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        id="b"
      />
    </div>
  );
}

function SignExtendDist({ data }) {
  return (
    <div className="fork-node">
      <Handle type="target" className="side-node" position={Position.Left} />
      <Handle
        type="source"
        className="side-node"
        position={Position.Right}
        id="a"
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="b"
      />
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
        style={{ top: 35 }}
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
      <Handle type="target" className="side-node" position={Position.Left} />
      <Handle
        type="source"
        className="top-node"
        position={Position.Top}
        id="a"
      />
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
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 95 }}
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="e"
      />
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
        style={{ top: 60 }}
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
        style={{ top: 20 }}
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

export function DiagramUtils() {
  const nodes = [
    {
      id: "PC",
      data: { label: "PC" },
      position: { x: 20, y: 300.5 },
      style: { height: 70 + "px", width: 70 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "PCAuxNode",
      position: { x: 930, y: 10 },
      type: "pcAuxNode",
    },
    {
      id: "PCTopAuxNode",
      position: { x: 12, y: 10 },
      type: "pcTopAuxNode",
    },
    {
      id: "PCounterFork",
      position: { x: 101, y: 333 },
      type: "forkNode",
    },
    {
      id: "PCAddFork",
      position: { x: 101, y: 117.5 },
      type: "forkNodeSecond",
    },
    {
      id: "AddPC",
      data: { label: "Add" },
      position: { x: 136, y: 37 },
      type: "addNode",
    },
    {
      id: "ShiftLeft",
      data: { label: "Shift Left" },
      position: { x: 624, y: 125 },
      style: { height: 30 + "px", width: 30 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "AddBranch",
      data: { label: "Add" },
      position: { x: 679, y: 100 },
      type: "addNode",
    },
    {
      id: "MuxTop",
      position: { x: 895, y: 52 },
      type: "muxNode",
    },
    {
      id: "And",
      position: { x: 799, y: 18 },
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
      position: { x: 276, y: 295 },
      type: "distributorNode",
    },
    {
      id: "InsFork",
      position: { x: 352, y: 387.5 },
      type: "forkNode",
    },
    {
      id: "MuxIns",
      position: { x: 401, y: 315 },
      type: "muxNode",
    },
    {
      id: "RegBank",
      data: { label: "Register Bank" },
      position: { x: 450, y: 285 },
      type: "regBankNode",
    },
    {
      id: "SignExtendDist",
      position: { x: 402, y: 467.5 },
      type: "signExtendDist",
    },
    {
      id: "SignExtend",
      data: { label: "Sign Extend" },
      position: { x: 470, y: 445 },
      style: { height: 50 + "px", width: 50 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "RegMuxFork1",
      position: { x: 575, y: 382.5 },
      type: "forkNode",
    },
    {
      id: "RegMuxFork2",
      position: { x: 600, y: 402.5 },
      type: "forkNodeSecond",
    },
    {
      id: "Control",
      data: { label: "Control" },
      position: { x: 298, y: 151 },
      type: "controlNode",
    },
    {
      id: "MuxReg",
      position: { x: 653, y: 365 },
      type: "muxNode",
    },
    {
      id: "ALUControl",
      data: { label: "ALU Control" },
      position: { x: 660, y: 475 },
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
      position: { x: 790, y: 327.5 },
      type: "signExtendDist",
    },
    {
      id: "DataMemory",
      data: { label: "Data Memory" },
      position: { x: 830, y: 300 },
      type: "dataMemoryNode",
    },
    {
      id: "ControlMemAuxNode",
      position: { x: 810, y: 430 },
      type: "controlMemAuxNode",
    },
    {
      id: "MuxMem",
      position: { x: 943, y: 405 },
      type: "muxNode",
    },
    {
      id: "MemAuxNode",
      position: { x: 970, y: 530 },
      type: "memAuxNode",
    },
    {
      id: "MemLeftAuxNode",
      position: { x: 430, y: 530 },
      type: "memLeftAuxNode",
    },
  ];

  const edges = [
    {
      id: "e1",
      source: "PC",
      target: "PCounterFork",
      type: "smoothstep",
    },
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
    { id: "e8", source: "MuxTop", target: "PCAuxNode", type: "smoothstep" },
    {
      id: "e8Aux",
      source: "PCAuxNode",
      target: "PCTopAuxNode",
      type: "smoothstep",
    },
    {
      id: "e8Aux2",
      source: "PCTopAuxNode",
      target: "PC",
      type: "smoothstep",
    },
    {
      id: "e9",
      source: "InsDistributor",
      sourceHandle: "a",
      target: "Control",
      type: "smoothstep",
    },
    {
      id: "e9Ins",
      source: "PC",
      target: "InsDistributor",
      type: "smoothstep",
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
      sourceHandle: "b",
      target: "MuxReg",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e21",
      source: "RegMuxFork1",
      sourceHandle: "a",
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
      targetHandle: "a",
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
      id: "e31Aux",
      source: "MuxMem",
      target: "MemAuxNode",
      type: "smoothstep",
    },
    {
      id: "e31Aux2",
      source: "MemAuxNode",
      target: "MemLeftAuxNode",
      type: "smoothstep",
    },
    {
      id: "e31",
      source: "MemLeftAuxNode",
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
      id: "e36Aux",
      source: "Control",
      sourceHandle: "c",
      target: "ControlMemAuxNode",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e36",
      source: "ControlMemAuxNode",
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

  const customNodeTypes = {
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
    pcAuxNode: PCAuxNode,
    pcTopAuxNode: PCTopAuxNode,
    memAuxNode: MemAuxNode,
    memLeftAuxNode: MemLeftAuxNode,
    controlMemAuxNode: ControlMemAuxNode,
  };

  return { nodes, edges, customNodeTypes };
}

export default DiagramUtils;
