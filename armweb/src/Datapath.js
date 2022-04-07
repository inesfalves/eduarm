import { useState } from "react";
import ReactFlow from "react-flow-renderer";

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
    position: { x: 100, y: 325 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "PCAddFork",
    position: { x: 100, y: 200 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "AddPC",
    data: { label: "Add" },
    position: { x: 135, y: 50 },
    style: { height: 70 + "px", width: 60 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
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
    style: { height: 70 + "px", width: 70 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "MuxTop",
    data: { label: "MUX" },
    position: { x: 800, y: 30 },
    style: { height: 70 + "px", width: 20 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "And",
    data: { label: "And" },
    position: { x: 750, y: 150 },
    style: { height: 20 + "px", width: 20 + "px", borderColor: "#00ADEE" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "InsMem",
    data: { label: "Instruction Memory" },
    position: { x: 150, y: 275 },
    style: { height: 125 + "px", width: 100 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "InsDistributor",
    position: { x: 275, y: 300 },
    style: { height: 60 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "InsFork",
    position: { x: 350, y: 325 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "MuxIns",
    data: { label: "MUX" },
    position: { x: 400, y: 300 },
    style: { height: 60 + "px", width: 20 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "RegBank",
    data: { label: "Register Bank" },
    position: { x: 450, y: 250 },
    style: { height: 150 + "px", width: 125 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "SignExtendDist",
    data: { label: "Distributor" },
    position: { x: 400, y: 425 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "SignExtend",
    data: { label: "Sign Extend" },
    position: { x: 490, y: 420 },
    style: { height: 50 + "px", width: 50 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "RegMuxFork1",
    position: { x: 580, y: 330 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "RegMuxFork2",
    position: { x: 600, y: 370 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "Control",
    data: { label: "Control" },
    position: { x: 350, y: 125 },
    style: { height: 100 + "px", width: 80 + "px", borderColor: "#00ADEE" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "MuxReg",
    data: { label: "MUX" },
    position: { x: 650, y: 330 },
    style: { height: 60 + "px", width: 20 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "ALUControl",
    data: { label: "ALU Control" },
    position: { x: 700, y: 410 },
    style: { height: 50 + "px", width: 50 + "px", borderColor: "#00ADEE" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "ALU",
    data: { label: "ALU" },
    position: { x: 720, y: 300 },
    style: { height: 60 + "px", width: 60 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "ALUFork",
    position: { x: 790, y: 330 },
    style: { height: 1 + "px", width: 1 + "px", backgroundColor: "black" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "DataMemory",
    data: { label: "Data Memory" },
    position: { x: 830, y: 320 },
    style: { height: 125 + "px", width: 100 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "MuxMem",
    data: { label: "MUX" },
    position: { x: 950, y: 350 },
    style: { height: 60 + "px", width: 20 + "px" },
    targetPosition: "left",
    sourcePosition: "right",
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

function Datapath() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return <ReactFlow nodes={nodes} edges={edges} defaultZoom="1.02" />;
}

export default Datapath;
