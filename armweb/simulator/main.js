const express = require("express");
const CPU = require("./CPU.js");
const app = express();
const cors = require("cors");
const port = 3001;

let cpu = new CPU("basicCPU");

let instructionCode = "";
let instructionGroup = [];
let registers = [];
let memory = new Array(21).fill(0);
let instructionTypeGroup = [];
let cpuStates = [];
let relevantLines = [];

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/execute", (req, res) => {
  cpu.initializeCPU(registers, memory);
  for (let i = 0; i < instructionGroup.length; i++) {
    let state = cpu.executeCPU(instructionGroup[i], instructionTypeGroup[i]);
    cpuStates.push(JSON.parse(JSON.stringify(state)));
    relevantLines = cpu.returnCPURelevantLines(instructionTypeGroup[i]);
  }

  res.send({
    cpuStates: cpuStates,
    relevantLines: relevantLines,
  });
});

app.get("/getRelevantLines", (req, res) => {
  res.send(relevantLines);
});

app.get("/reset", (req, res) => {
  cpuStates = [];
  instructionGroup = [];
  instructionTypeGroup = [];
  cpu.resetCPU();
  res.send(cpuStates);
});

app.get("/recalculateLatency/:newLatency/:componentID", (req, res) => {
  let newCpuState = cpu.recalculateComponentLatency(
    req.params.newLatency,
    req.params.componentID
  );
  res.send(newCpuState);
});

app.post("/sendRegisters", (req, res) => {
  registers = req.body;
  res.send("Registers");
});

app.post("/readInstruction", (req, res) => {
  let instructions = req.body.instructions;
  let instructionCodes = [];
  let address,
    rd,
    rn = null;
  for (let instruction of instructions) {
    switch (instruction[0]) {
      case "add":
      case "sub":
      case "and":
      case "orr":
        let rm = (instruction[3] >>> 0).toString(2).padStart(5, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        instructionCodes.push(
          assembleALInstruction(instruction[0], rm, rn, rd)
        );
        break;
      case "ldur":
      case "stur":
        let offset = (instruction[3] >>> 0).toString(2).padStart(9, "0");
        rn = (instruction[2] >>> 0).toString(2).padStart(5, "0");
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        instructionCodes.push(
          assembleMemInstruction(instruction[0], offset, rn, rd)
        );
        break;
      case "b":
        address = (instruction[1] >>> 0).toString(2).padStart(26, "0");
        instructionCodes.push(assembleJumpBInstruction(address));
        break;
      case "cbz":
        rd = (instruction[1] >>> 0).toString(2).padStart(5, "0");
        address = (instruction[2] >>> 0).toString(2).padStart(19, "0");
        instructionCodes.push(assembleJumpCondInstruction(address, rd));
        break;
    }
  }
  res.send(JSON.stringify(instructionCodes));
});

app.get("/assembleALInstruction/:op/:dest/:first/:second", (req, res) => {
  let op = req.params.op;
  let rm = (req.params.second >>> 0).toString(2).padStart(5, "0");
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");

  let instructionCode = assembleALInstruction(op, rm, rn, rd);
  res.send(JSON.stringify(instructionCode));
});

const assembleALInstruction = (op, rm, rn, rd) => {
  let opcode = "";
  let shamt = "000000";
  switch (op) {
    case "add":
      opcode = "10001011000";
      break;
    case "sub":
      opcode = "11001011000";
      break;
    case "and":
      opcode = "10001010000";
      break;
    case "orr":
      opcode = "10101010000";
      break;
  }
  instructionTypeGroup.push("rType");
  instructionCode = opcode + rm + shamt + rn + rd;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.get("/assembleMemInstruction/:op/:dest/:first/:second", (req, res) => {
  let op = req.params.op;
  let offset = (req.params.second >>> 0).toString(2).padStart(9, "0");
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");
  let instructionCode = assembleMemInstruction(op, offset, rn, rd);
  res.send(JSON.stringify(instructionCode));
});

const assembleMemInstruction = (op, offset, rn, rd) => {
  let opcode = "";
  let op2 = "00";
  switch (op) {
    case "ldur":
      opcode = "11111000010";
      instructionTypeGroup.push("loadType");
      break;
    case "stur":
      opcode = "11111000000";
      instructionTypeGroup.push("storeType");
      break;
  }
  instructionCode = opcode + offset + op2 + rn + rd;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.get("/assembleJumpBInstruction/:label", (req, res) => {
  let address = (req.params.label >>> 0).toString(2).padStart(26, "0");
  let instructionCode = assembleJumpBInstruction(address);
  res.send(JSON.stringify(instructionCode));
});

const assembleJumpBInstruction = (address) => {
  let opcode = "000101";
  instructionTypeGroup.push("uncondBranchType");
  instructionCode = opcode + address;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.get("/assembleJumpCondInstruction/:cond/:label", (req, res) => {
  let rd = (req.params.cond >>> 0).toString(2).padStart(5, "0");
  let address = (req.params.label >>> 0).toString(2).padStart(19, "0");
  let instructionCode = assembleJumpCondInstruction(address, rd);
  res.send(JSON.stringify(instructionCode));
});

const assembleJumpCondInstruction = (rd, address) => {
  let opcode = "10110100";
  instructionTypeGroup.push("cBranchType");
  instructionCode = opcode + address + rd;
  instructionGroup.push(instructionCode);
  return instructionCode;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
