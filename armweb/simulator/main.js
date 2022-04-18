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

app.get("/getNode/:id", (req, res) => {
  let component = cpu.returnComponentByID(req.params.id);
  console.log(component);
  // let obj = {
  //   componentId: component.id,
  //   componentInputs: component.inputs.values(),
  //   componentOutputs: component.outputs.values(),
  // };
  res.send(component);
});

app.get("/execute", (req, res) => {
  cpu.initializeCPU();
  cpu.executeCPU();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
