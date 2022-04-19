import { useState } from "react";
import Navbar from "./Navbar.js";
import Registers from "./Registers.js";
import ViewTab from "./ViewTab.js";
import "./App.css";

const axios = require("axios");

function App() {
  const [cpuState, setCpuState] = useState([]);

  const executeProgram = () => {
    axios.get("http://localhost:3001/execute").then(function (res) {
      console.log("CPU INITIALIZED");
      setCpuState(res.data);
    });
  };

  const executeNext = () => {
    axios.get("http://localhost:3001/executeClockCycle").then(function (res) {
      setCpuState(res.data);
    });
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab cpuState={cpuState}></ViewTab>
            <div className="buttonsArea container">
              <div className="row justify-content-around py-3">
                <button type="button" className="btn btn-outline-dark col-2">
                  Reset
                </button>
                <button type="button" className="btn btn-outline-dark col-2">
                  Previous
                </button>
                <button
                  onClick={executeProgram}
                  type="button"
                  className="btn btn-outline-primary col-2"
                >
                  Execute
                </button>
                <button
                  onClick={executeNext}
                  type="button"
                  className="btn btn-outline-dark col-2"
                >
                  Next
                </button>
                <button type="button" className="btn btn-outline-dark col-2">
                  Performance
                </button>
              </div>
            </div>
          </div>
          <div className="registersArea col-4">
            <p className="text-uppercase text-center fw-normal mt-2">
              Registers
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <Registers registerID="X0"></Registers>
                  <Registers registerID="X1"></Registers>
                  <Registers registerID="X2"></Registers>
                  <Registers registerID="X3"></Registers>
                  <Registers registerID="X4"></Registers>
                  <Registers registerID="X5"></Registers>
                  <Registers registerID="X6"></Registers>
                  <Registers registerID="X7"></Registers>
                  <Registers registerID="X8"></Registers>
                  <Registers registerID="X9"></Registers>
                  <Registers registerID="X10"></Registers>
                  <Registers registerID="X11"></Registers>
                  <Registers registerID="X12"></Registers>
                  <Registers registerID="X13"></Registers>
                  <Registers registerID="X14"></Registers>
                  <Registers registerID="X15"></Registers>
                </div>
                <div className="col-6">
                  <Registers registerID="X16"></Registers>
                  <Registers registerID="X17"></Registers>
                  <Registers registerID="X18"></Registers>
                  <Registers registerID="X19"></Registers>
                  <Registers registerID="X20"></Registers>
                  <Registers registerID="X21"></Registers>
                  <Registers registerID="X22"></Registers>
                  <Registers registerID="X23"></Registers>
                  <Registers registerID="X24"></Registers>
                  <Registers registerID="X25"></Registers>
                  <Registers registerID="X26"></Registers>
                  <Registers registerID="X27"></Registers>
                  <Registers registerID="X28"></Registers>
                  <Registers registerID="X29"></Registers>
                  <Registers registerID="X30"></Registers>
                  <Registers registerID="X31"></Registers>
                </div>
              </div>
              <div className="text-center m-4">
                <div
                  className="w-50 btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    DEC
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    BIN
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    HEX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
