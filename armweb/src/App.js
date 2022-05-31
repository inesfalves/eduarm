import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Registers from "./Registers.js";
import ViewTab from "./ViewTab.js";
import "./App.css";

const axios = require("axios");

function App() {
  const [cpuState, setCpuState] = useState([]);
  const [cpuIndex, setCpuIndex] = useState(0);
  const [registerValues, setRegisterValues] = useState([]);
  const [memoryValues, setMemoryValues] = useState([]);
  const [compiling, setCompiling] = useState(false);
  const [executed, setExecuted] = useState(false);
  const [savedCPUStates, setSavedCPUStates] = useState([]);
  const [numberFormat, setNumberFormat] = useState("DEC");

  let tempReg = [];
  for (let i = 0; i < 32; i++) {
    let registerMap = [i, ""];
    tempReg.push(registerMap);
  }

  // useEffect(() => {
  //   let tempArray = registerValues.slice();
  //   for (let i = 0; i < tempArray.length; i++) {
  //     if (!isNaN(tempArray[i][1])) {
  //       switch (numberFormat) {
  //         case "BIN":
  //           tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(2);
  //           break;
  //         case "HEX":
  //           tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(16);
  //           break;
  //         case "DEC":
  //           tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(10);
  //           break;
  //       }
  //     }
  //   }
  //   setRegisterValues(tempArray);
  // }, [numberFormat]);

  useEffect(() => {
    setRegisterValues(tempReg);
  }, []);

  const updateRegisters = (data) => {
    for (let comp of data) {
      if (comp.id === "RegBank") {
        setRegisterValues(comp.registers);
      }
    }
  };

  const executeProgram = () => {
    setExecuted(true);
    axios
      .post("http://localhost:3001/sendRegisters", registerValues)
      .then(() => {
        axios.get("http://localhost:3001/execute").then(function (res) {
          console.log("CPU INITIALIZED");
          setSavedCPUStates(res.data);
          setCpuState(res.data[res.data.length - 1]);
          setCpuIndex(res.data.length - 1);
          updateRegisters(res.data[res.data.length - 1]);
        });
      });
  };

  const getPrevious = () => {
    if (cpuIndex > 0) {
      setCpuState(savedCPUStates[cpuIndex - 1]);
      updateRegisters(savedCPUStates[cpuIndex - 1]);
      setCpuIndex(cpuIndex - 1);
    }
  };

  const getNext = () => {
    if (cpuIndex < savedCPUStates.length - 1) {
      setCpuState(savedCPUStates[cpuIndex + 1]);
      updateRegisters(savedCPUStates[cpuIndex + 1]);
      setCpuIndex(cpuIndex + 1);
    }
  };

  const resetProgram = () => {
    axios.get("http://localhost:3001/reset").then(function (res) {
      console.log("CPU RESET");
      setCompiling(false);
      setExecuted(false);
      setSavedCPUStates(res.data);
      setCpuIndex(0);
      setRegisterValues(tempReg);
    });
  };

  const executeNext = () => {
    axios.get("http://localhost:3001/executeClockCycle").then(function (res) {
      setCpuState(res.data);
    });
  };

  const compileProgram = () => {
    setCompiling(true);
  };

  let registerList = [],
    registerListSecond = [];
  for (var i = 0; i < 32; i++) {
    if (i <= 15) {
      registerList.push(
        <Registers
          key={i}
          setRegisterValues={setRegisterValues}
          registerValues={registerValues}
          registerID={i}
        ></Registers>
      );
    } else {
      registerListSecond.push(
        <Registers
          key={i}
          setRegisterValues={setRegisterValues}
          registerValues={registerValues}
          registerID={i}
        ></Registers>
      );
    }
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab
              numberFormat={numberFormat}
              cpuState={cpuState}
              compiling={compiling}
              executed={executed}
              setCompiling={setCompiling}
              setMemoryValues={setMemoryValues}
              memoryValues={memoryValues}
            ></ViewTab>
            <div className="buttonsArea container">
              <div className="row justify-content-around py-3">
                <button
                  onClick={compileProgram}
                  type="button"
                  className="btn btn-outline-dark col-2"
                >
                  Compile
                </button>
                <button
                  onClick={resetProgram}
                  type="button"
                  className="btn btn-outline-dark col-2"
                >
                  Reset
                </button>
                <button
                  onClick={getPrevious}
                  type="button"
                  className="btn btn-outline-dark col-2"
                >
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
                  onClick={getNext}
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
                <div className="col-6">{registerList}</div>
                <div className="col-6">{registerListSecond}</div>
              </div>
              <div className="text-center m-4">
                <div
                  className="w-50 btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setNumberFormat("DEC")}
                  >
                    DEC
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setNumberFormat("BIN")}
                  >
                    BIN
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setNumberFormat("HEX")}
                  >
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
