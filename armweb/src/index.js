import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
//const CPU = require("./CPU");

//var cpu = new CPU("basicCPU");

// cpu.initializeCPU();
// console.log("CPU INITIALIZED");
// console.log("FIRST CYCLE");
// cpu.executeCPU();
// console.log("SECOND CYCLE");
// cpu.executeCPU();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
