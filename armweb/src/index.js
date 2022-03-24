import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const RegBank = require("./simulator/RegBank");
const ALU = require("./simulator/ALU");
const MUX = require("./simulator/MUX");
const Control = require("./simulator/Control.js");
const ALUControl = require("./simulator/ALUControl.js");

var reg = new RegBank("registerBank");
var alu = new ALU("ALU");
var mux = new MUX("MUX");
var ctrl = new Control("Control");
var aluctrl = new ALUControl("ALU Control");

ctrl.execute();
ctrl.printValues();
reg.execute(ctrl);
reg.printValues();
aluctrl.execute(ctrl);
aluctrl.printValues();
alu.execute(reg, aluctrl);
alu.printValues();
mux.execute(reg, alu);
mux.printValues();
reg.printValues();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
