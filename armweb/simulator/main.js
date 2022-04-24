const express = require("express");
const CPU = require("./CPU.js");
const app = express();
const cors = require("cors");
const port = 3001;

let cpu = new CPU("basicCPU");

let instructionCode = "";
let registers = [];

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
  cpu.initializeCPU();
  cpu.executeCPU(instructionCode, registers);
  res.send(cpu.returnCPU());
});

app.post("/sendRegisters", (req, res) => {
  registers = req.body;
  res.send("Registers");
});

app.get("/executeClockCycle", (req, res) => {
  cpu.executeCPU(instructionCode, registers);
  res.send(cpu.returnCPU());
});

app.get("/assembleALInstruction/:op/:dest/:first/:second", (req, res) => {
  let opcode = "";
  let shamt = "000000";
  let rm = (req.params.second >>> 0).toString(2).padStart(5, "0");
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");
  switch (req.params.op) {
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
  instructionCode = opcode + rm + shamt + rn + rd;
  res.send(JSON.stringify(instructionCode));
});

app.get("/assembleMemInstruction/:op/:dest/:first/:second", (req, res) => {
  let opcode = "";
  let offset = (req.params.second >>> 0).toString(2).padStart(9, "0");
  let op2 = "00";
  let rn = (req.params.first >>> 0).toString(2).padStart(5, "0");
  let rd = (req.params.dest >>> 0).toString(2).padStart(5, "0");
  switch (req.params.op) {
    case "ldur":
      opcode = "11111000010";
      break;
    case "stur":
      opcode = "11111000000";
      break;
  }
  instructionCode = opcode + offset + op2 + rn + rd;
  res.send(JSON.stringify(instructionCode));
});

app.get("/assembleJumpBInstruction/:label", (req, res) => {
  let opcode = "000101";
  let address = (req.params.label >>> 0).toString(2).padStart(26, "0");
  instructionCode = opcode + address;
  res.send(JSON.stringify(instructionCode));
});

app.get("/assembleJumpCondInstruction/:cond/:label", (req, res) => {
  let opcode = "10110100";
  let address = (req.params.label >>> 0).toString(2).padStart(19, "0");
  let rd = (req.params.cond >>> 0).toString(2).padStart(5, "0");
  instructionCode = opcode + address + rd;
  res.send(JSON.stringify(instructionCode));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
