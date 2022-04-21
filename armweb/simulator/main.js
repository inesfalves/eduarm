const express = require("express");
const CPU = require("./CPU.js");
const app = express();
const cors = require("cors");
const port = 3001;

let cpu = new CPU("basicCPU");

let instructionCode = "";

app.use(cors());

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
  if (cpu.returnCPU().length === 0) {
    cpu.initializeCPU();
    cpu.executeCPU(instructionCode);
    res.send(cpu.returnCPU());
  }
});

app.get("/executeClockCycle", (req, res) => {
  cpu.executeCPU(instructionCode);
  res.send(cpu.returnCPU());
});

app.get("/assembleInstruction/:op/:dest/:first/:second", (req, res) => {
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
  res.send(JSON.stringify(opcode + rm + shamt + rn + rd));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
