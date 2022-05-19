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

function PipePCNode({ data }) {
  return (
    <div className="alu-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} />
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

function PipeSignExtendDist({ data }) {
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
        className="side-node"
        position={Position.Right}
        style={{ top: 40 }}
        id="b"
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="c"
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

function PipeMuxNode({ data }) {
  return (
    <div className="mux-node">
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 30 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 45 }}
      />
      <Handle type="target" position={Position.Bottom} id="d" />
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

function PipeDistNode({ data }) {
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
        style={{ top: 45 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 60 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 80 }}
      />
      <Handle
        type="source"
        className="top-node"
        position={Position.Bottom}
        id="f"
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

function IFIDNode({ data }) {
  return (
    <div className="pipeline-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 150 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 264 }}
      />
      <Handle type="target" position={Position.Top} id="c" />
      <Handle
        type="source"
        id="a"
        style={{ top: 150 }}
        position={Position.Right}
      />
      <Handle
        type="source"
        id="b"
        style={{ top: 264 }}
        position={Position.Right}
      />
    </div>
  );
}

function IDEXNode({ data }) {
  return (
    <div className="pipeline-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 150 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 260 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 340 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="e"
        style={{ top: 450 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="f"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 150 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 260 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 340 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 450 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="f"
        style={{ top: 490 }}
      />
    </div>
  );
}

function EXMEMNode({ data }) {
  return (
    <div className="pipeline-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 100 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 200 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 300 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="e"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 100 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 200 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 300 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="e"
        style={{ top: 490 }}
      />
    </div>
  );
}

function MEMWBNode({ data }) {
  return (
    <div className="pipeline-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 300 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ top: 400 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ top: 490 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 300 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 400 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 490 }}
      />
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

function PipeControlNode({ data }) {
  return (
    <div className="pipecontrol-node">
      <label htmlFor="text">{data.label}</label>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function HazardDetectionNode({ data }) {
  return (
    <div className="pipeunit-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{ top: 25 }}
      />
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
        style={{ top: 45 }}
      />
      <Handle type="target" position={Position.Bottom} id="c" />
      <Handle
        type="target"
        position={Position.Right}
        id="d"
        style={{ top: 20 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ top: 40 }}
      />
    </div>
  );
}

function ForwardingUnitNode({ data }) {
  return (
    <div className="pipeunit-node">
      <label htmlFor="text">{data.label}</label>
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        style={{ top: 15 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{ top: 25 }}
      />
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
        style={{ top: 45 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="c"
        style={{ top: 15 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="d"
        style={{ top: 25 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="e"
        style={{ top: 35 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="f"
        style={{ top: 45 }}
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
      source: "InsMem",
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

  const pipelineNodes = [
    {
      id: "IFIDNode",
      data: { label: "IF/ID" },
      position: { x: 279, y: 137 },
      type: "ifidNode",
    },
    {
      id: "IDEXNode",
      data: { label: "ID/EX" },
      position: { x: 567, y: 137 },
      type: "idexNode",
    },
    {
      id: "EXMEMNode",
      data: { label: "EX/MEM" },
      position: { x: 871, y: 137 },
      type: "exmemNode",
    },
    {
      id: "MEMWBNode",
      data: { label: "MEM/WB" },
      position: { x: 1075, y: 137 },
      type: "memwbNode",
    },
    {
      id: "PC",
      data: { label: "PC" },
      position: { x: 49, y: 300.5 },
      type: "pipePCNode",
    },
    {
      id: "PCAuxNode",
      position: { x: 227, y: 115 },
      type: "pcAuxNode",
    },
    {
      id: "PCTopAuxNode",
      position: { x: 8, y: 115 },
      type: "pcTopAuxNode",
    },
    {
      id: "PCounterFork",
      position: { x: 127, y: 332 },
      type: "forkNode",
    },
    {
      id: "PCAddFork",
      position: { x: 128, y: 232.5 },
      type: "forkNodeSecond",
    },
    {
      id: "HazardFork1",
      position: { x: 330, y: 123 },
      type: "forkNodeSecond",
    },
    {
      id: "HazardFork2",
      position: { x: 330, y: 70.5 },
      type: "forkNodeSecond",
    },
    {
      id: "HazardIDEXFork",
      position: { x: 612, y: 625 },
      type: "forkNodeSecond",
    },
    {
      id: "ForwardIDEXFork1",
      position: { x: 612, y: 535 },
      type: "forkNodeSecond",
    },
    {
      id: "ForwardIDEXFork2",
      position: { x: 612, y: 585 },
      type: "forkNodeSecond",
    },
    {
      id: "ForwardEXMEMFork",
      position: { x: 916, y: 625.5 },
      type: "forkNodeSecond",
    },
    {
      id: "AddPC",
      data: { label: "Add" },
      position: { x: 150, y: 122 },
      type: "addNode",
    },
    {
      id: "ShiftLeft",
      data: { label: "Shift Left" },
      position: { x: 684, y: 271 },
      style: { height: 30 + "px", width: 30 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "AddBranch",
      data: { label: "Add" },
      position: { x: 733, y: 166 },
      type: "addNode",
    },
    {
      id: "MuxTop",
      position: { x: 19, y: 305 },
      type: "muxNode",
    },
    {
      id: "And",
      position: { x: 953, y: 160 },
      data: { label: "And" },
      type: "andNode",
    },
    {
      id: "InsMem",
      data: { label: "Instruction Memory" },
      position: { x: 140, y: 271 },
      style: { height: 125 + "px", width: 100 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "InsDistributor",
      position: { x: 332, y: 284 },
      type: "pipeDistNode",
    },
    {
      id: "MuxIns",
      position: { x: 370, y: 339 },
      type: "muxNode",
    },
    {
      id: "RegBank",
      data: { label: "Register Bank" },
      position: { x: 408, y: 309 },
      type: "regBankNode",
    },
    {
      id: "PipeSignExtendDist",
      position: { x: 328, y: 488.5 },
      type: "pipesignExtendDist",
    },
    {
      id: "SignExtend",
      data: { label: "Sign Extend" },
      position: { x: 413, y: 466 },
      style: { height: 50 + "px", width: 50 + "px" },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "RegMuxFork1",
      position: { x: 674, y: 474.5 },
      type: "forkNode",
    },
    {
      id: "RegMuxFork2",
      position: { x: 665, y: 425.5 },
      type: "forkNodeSecond",
    },
    {
      id: "HazardDetection",
      data: { label: "Hazard Detection" },
      position: { x: 348, y: 28 },
      type: "hazardDetectionNode",
    },
    {
      id: "ForwardingUnit",
      data: { label: "Forwarding Unit" },
      position: { x: 741, y: 554 },
      type: "forwardingUnitNode",
    },
    {
      id: "Control",
      data: { label: "Control" },
      position: { x: 423, y: 100.5 },
      type: "pipeControlNode",
    },
    {
      id: "MuxControl",
      position: { x: 514, y: 105.5 },
      type: "muxNode",
    },
    {
      id: "ControlEXIDEX",
      data: { label: "EX" },
      position: { x: 567, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      type: "output",
      targetPosition: "left",
    },
    {
      id: "ControlMIDEX",
      data: { label: "M" },
      position: { x: 567, y: 78 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlWBIDEX",
      data: { label: "WB" },
      position: { x: 567, y: 48 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlMEXMEM",
      data: { label: "M" },
      position: { x: 871, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      type: "output",
      targetPosition: "left",
    },
    {
      id: "ControlWBEXMEM",
      data: { label: "WB" },
      position: { x: 871, y: 78 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlWBMEMWB",
      data: { label: "WB" },
      position: { x: 1075, y: 108 },
      style: {
        height: 30 + "px",
        width: 30 + "px",
        borderColor: "#00ADEE",
        color: "#00ADEE",
      },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "ControlLineFork",
      position: { x: 644, y: 91 },
      type: "forkNode",
    },
    {
      id: "ControlLineFork2",
      position: { x: 916, y: 91 },
      type: "forkNode",
    },
    {
      id: "PipeMux1",
      position: { x: 630, y: 348 },
      type: "pipeMuxNode",
    },
    {
      id: "PipeMux2",
      position: { x: 630, y: 436 },
      type: "pipeMuxNode",
    },
    {
      id: "MuxReg",
      position: { x: 702, y: 388 },
      type: "muxNode",
    },
    {
      id: "ALUControl",
      data: { label: "ALU Control" },
      position: { x: 706, y: 479 },
      type: "aluControlNode",
    },
    {
      id: "ALU",
      data: { label: "ALU" },
      position: { x: 738, y: 286 },
      type: "aluNode",
    },
    {
      id: "ALUFork",
      position: { x: 943, y: 435 },
      type: "signExtendDist",
    },
    {
      id: "DataMemory",
      data: { label: "Data Memory" },
      position: { x: 963, y: 407 },
      type: "dataMemoryNode",
    },
    {
      id: "MuxMem",
      position: { x: 1150, y: 417 },
      type: "muxNode",
    },
    {
      id: "MemAuxNode",
      position: { x: 1185, y: 641 },
      type: "memAuxNode",
    },
    {
      id: "MemLeftAuxNode",
      position: { x: 376, y: 641 },
      type: "memLeftAuxNode",
    },
  ];

  const pipelineEdges = [
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
      id: "e3Pipe",
      source: "InsMem",
      target: "IFIDNode",
      targetHandle: "b",
      type: "smoothstep",
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
      target: "IFIDNode",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e6",
      source: "AddPC",
      target: "PCAuxNode",
      type: "smoothstep",
    },
    {
      id: "e7",
      source: "AddBranch",
      targetHandle: "a",
      target: "EXMEMNode",
      type: "smoothstep",
    },
    {
      id: "e8",
      source: "MuxTop",
      target: "PC",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e8Aux",
      source: "PCAuxNode",
      target: "PCTopAuxNode",
      type: "smoothstep",
    },
    {
      id: "e8Aux2",
      source: "PCTopAuxNode",
      target: "MuxTop",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e9Ins",
      source: "IFIDNode",
      sourceHandle: "b",
      target: "InsDistributor",
      type: "smoothstep",
    },
    {
      id: "e9",
      source: "InsDistributor",
      sourceHandle: "a",
      target: "HazardFork1",
      type: "smoothstep",
    },
    {
      id: "e91",
      source: "HazardFork1",
      sourceHandle: "a",
      target: "HazardFork2",
      type: "smoothstep",
    },
    {
      id: "e92",
      source: "HazardFork1",
      sourceHandle: "b",
      target: "Control",
      type: "smoothstep",
    },
    {
      id: "e93",
      source: "HazardFork2",
      sourceHandle: "a",
      target: "HazardDetection",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e94",
      source: "HazardFork2",
      sourceHandle: "b",
      target: "HazardDetection",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e9c",
      source: "Control",
      target: "MuxControl",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e11",
      source: "InsDistributor",
      sourceHandle: "b",
      targetHandle: "c",
      target: "MuxIns",
      type: "smoothstep",
    },
    {
      id: "e10",
      source: "InsDistributor",
      sourceHandle: "c",
      targetHandle: "a",
      target: "RegBank",
      type: "smoothstep",
    },
    {
      id: "e12",
      source: "InsDistributor",
      sourceHandle: "d",
      target: "MuxIns",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e13P",
      source: "InsDistributor",
      sourceHandle: "e",
      target: "MuxIns",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e13",
      source: "InsDistributor",
      sourceHandle: "f",
      target: "PipeSignExtendDist",
      type: "smoothstep",
    },
    {
      id: "e16",
      source: "PipeSignExtendDist",
      sourceHandle: "a",
      target: "SignExtend",
      type: "smoothstep",
    },
    {
      id: "e17",
      source: "PipeSignExtendDist",
      sourceHandle: "b",
      target: "IDEXNode",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e172",
      source: "PipeSignExtendDist",
      sourceHandle: "c",
      target: "IDEXNode",
      targetHandle: "f",
      type: "smoothstep",
    },
    {
      id: "e18",
      source: "SignExtend",
      target: "IDEXNode",
      targetHandle: "d",
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
      id: "e21P",
      source: "RegMuxFork1",
      sourceHandle: "a",
      target: "EXMEMNode",
      targetHandle: "d",
      type: "smoothstep",
    },
    {
      id: "e21",
      source: "EXMEMNode",
      sourceHandle: "d",
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
      id: "e19",
      source: "RegMuxFork2",
      sourceHandle: "b",
      target: "MuxReg",
      targetHandle: "b",
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
      targetHandle: "b",
      target: "IDEXNode",
      type: "smoothstep",
    },
    {
      id: "e25",
      source: "RegBank",
      sourceHandle: "b",
      target: "IDEXNode",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e22P2",
      source: "IDEXNode",
      sourceHandle: "b",
      targetHandle: "a",
      target: "PipeMux1",
      type: "smoothstep",
    },
    {
      id: "e22P",
      source: "PipeMux1",
      targetHandle: "a",
      target: "ALU",
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
      target: "EXMEMNode",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e23P",
      source: "EXMEMNode",
      sourceHandle: "c",
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
      target: "MEMWBNode",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e30",
      source: "DataMemory",
      target: "MEMWBNode",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e30P",
      source: "MEMWBNode",
      sourceHandle: "a",
      target: "MuxMem",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e31P",
      source: "MEMWBNode",
      sourceHandle: "b",
      target: "MuxMem",
      targetHandle: "b",
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
      id: "e33",
      source: "MuxIns",
      target: "RegBank",
      targetHandle: "b",
      type: "smoothstep",
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
      id: "e40",
      source: "ALUControl",
      target: "ALU",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e41P",
      source: "ALU",
      sourceHandle: "a",
      target: "EXMEMNode",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e41",
      source: "EXMEMNode",
      sourceHandle: "b",
      target: "And",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e42",
      source: "EXMEMNode",
      sourceHandle: "a",
      target: "MuxTop",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e43",
      source: "IFIDNode",
      sourceHandle: "a",
      target: "IDEXNode",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e44",
      source: "IDEXNode",
      sourceHandle: "a",
      targetHandle: "a",
      target: "AddBranch",
      type: "smoothstep",
    },
    {
      id: "e45",
      source: "IDEXNode",
      sourceHandle: "d",
      target: "ForwardIDEXFork1",
      type: "smoothstep",
    },
    {
      id: "e452",
      source: "ForwardIDEXFork1",
      sourceHandle: "b",
      target: "RegMuxFork2",
      type: "smoothstep",
    },
    {
      id: "e453",
      source: "ForwardIDEXFork1",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e46P",
      source: "IDEXNode",
      sourceHandle: "c",
      target: "PipeMux2",
      targetHandle: "a",
      type: "smoothstep",
    },
    {
      id: "e46",
      source: "PipeMux2",
      target: "RegMuxFork1",
      type: "smoothstep",
    },
    {
      id: "e47",
      source: "IDEXNode",
      sourceHandle: "e",
      target: "ForwardIDEXFork2",
      type: "smoothstep",
    },
    {
      id: "e472",
      source: "ForwardIDEXFork2",
      sourceHandle: "b",
      target: "ALUControl",
      type: "smoothstep",
    },
    {
      id: "e473",
      source: "ForwardIDEXFork2",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "b",
      type: "smoothstep",
    },
    {
      id: "e481",
      source: "IDEXNode",
      sourceHandle: "f",
      target: "HazardIDEXFork",
      type: "smoothstep",
    },
    {
      id: "e482",
      source: "HazardIDEXFork",
      sourceHandle: "a",
      target: "HazardDetection",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e48",
      source: "HazardIDEXFork",
      sourceHandle: "b",
      target: "EXMEMNode",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e49",
      source: "EXMEMNode",
      sourceHandle: "e",
      target: "ForwardEXMEMFork",
      type: "smoothstep",
    },
    {
      id: "e491",
      source: "ForwardEXMEMFork",
      sourceHandle: "b",
      target: "MEMWBNode",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e50",
      source: "HazardDetection",
      sourceHandle: "a",
      target: "PC",
      targetHandle: "b",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e51",
      source: "HazardDetection",
      sourceHandle: "b",
      target: "IFIDNode",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e52",
      source: "HazardDetection",
      sourceHandle: "c",
      target: "MuxControl",
      targetHandle: "c",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e53",
      source: "ControlLineFork",
      sourceHandle: "a",
      target: "HazardDetection",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e54",
      source: "ControlLineFork",
      sourceHandle: "b",
      target: "ControlMEXMEM",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e55",
      source: "ControlMIDEX",
      target: "ControlLineFork",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e56",
      source: "ControlWBIDEX",
      target: "ControlWBEXMEM",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e57",
      source: "MuxControl",
      target: "ControlWBIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e58",
      source: "MuxControl",
      target: "ControlMIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e59",
      source: "MuxControl",
      target: "ControlEXIDEX",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e60",
      source: "ControlWBEXMEM",
      target: "ControlLineFork2",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e61",
      source: "ControlLineFork2",
      sourceHandle: "b",
      target: "ControlWBMEMWB",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e62",
      source: "ControlLineFork2",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e492",
      source: "ForwardEXMEMFork",
      sourceHandle: "a",
      target: "ForwardingUnit",
      targetHandle: "c",
      type: "smoothstep",
    },
    {
      id: "e63",
      source: "ForwardingUnit",
      sourceHandle: "a",
      target: "PipeMux1",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e64",
      source: "ForwardingUnit",
      sourceHandle: "b",
      target: "PipeMux2",
      targetHandle: "d",
      type: "smoothstep",
      style: { stroke: "#00ADEE" },
    },
    {
      id: "e65",
      source: "MEMWBNode",
      sourceHandle: "c",
      target: "ForwardingUnit",
      targetHandle: "e",
      type: "smoothstep",
    },
    {
      id: "e66",
      source: "ControlWBMEMWB",
      target: "ForwardingUnit",
      targetHandle: "f",
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
    pipesignExtendDist: PipeSignExtendDist,
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
    ifidNode: IFIDNode,
    idexNode: IDEXNode,
    exmemNode: EXMEMNode,
    memwbNode: MEMWBNode,
    pipeDistNode: PipeDistNode,
    pipeControlNode: PipeControlNode,
    hazardDetectionNode: HazardDetectionNode,
    forwardingUnitNode: ForwardingUnitNode,
    pipeMuxNode: PipeMuxNode,
    pipePCNode: PipePCNode,
  };

  return { nodes, edges, pipelineNodes, pipelineEdges, customNodeTypes };
}

export default DiagramUtils;
