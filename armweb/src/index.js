import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const RegBank = require("./simulator/RegBank");
const ALU = require("./simulator/ALU");
const MUX = require("./simulator/MUX");

var reg = new RegBank("registerBank");
var alu = new ALU("ALU");
var mux = new MUX("MUX");
reg.execute();
reg.printValues();
alu.execute(reg, "ADD");
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
