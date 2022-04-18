const express = require("express");
const CPU = require("./CPU.js");
const app = express();
const cors = require("cors");
const port = 3001;

let cpu = new CPU("basicCPU");

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
    cpu.executeCPU();
    res.send(cpu.returnCPU());
  }
});

app.get("/executeClockCycle", (req, res) => {
  cpu.executeCPU();
  res.send(cpu.returnCPU());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
