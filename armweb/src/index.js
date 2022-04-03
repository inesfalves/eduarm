import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const CPU = require("./CPU");

var cpu = new CPU("basicCPU");

cpu.initializeCPU();
console.log("\n");
console.log("CPU INITIALIZED");
console.log("\n");
console.log("RUN FIRST TIME");
cpu.executeCPU();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
