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
  const [defineLatency, setDefineLatency] = useState(false);
  const [relevantLines, setRelevantLines] = useState([]);
  const [assemblyCode, setAssemblyCode] = useState(``);
  const [showRegisterArea, setShowRegisterArea] = useState(false);
  const [currentInput, setCurrentInput] = useState(0);
  const [selectedRegister, setSelectedRegister] = useState(null);

  let tempReg = [];
  for (let i = 0; i < 32; i++) {
    let registerMap = [i, ""];
    tempReg.push(registerMap);
  }

  useEffect(() => {
    if (defineLatency) {
      console.log("Setting component latency");
    }
  }, [defineLatency]);

  useEffect(() => {
    let tempArray = registerValues.slice();
    for (let i = 0; i < tempArray.length; i++) {
      if (!isNaN(tempArray[i][1])) {
        switch (numberFormat) {
          case "BIN":
            tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(2);
            break;
          case "HEX":
            tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(16);
            break;
          case "DEC":
            tempArray[i][1] = parseInt(tempArray[i][1], 10).toString(10);
            break;
        }
      }
    }
  }, [numberFormat]);

  useEffect(() => {
    setRegisterValues(tempReg);
    resetProgram();
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
          setSavedCPUStates(res.data.cpuStates);
          setCpuState(res.data.cpuStates[res.data.cpuStates.length - 1]);
          setCpuIndex(res.data.cpuStates.length - 1);
          setRelevantLines(res.data.relevantLines);
          updateRegisters(res.data.cpuStates[res.data.cpuStates.length - 1]);
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
      setCompiling(false);
      setExecuted(false);
      setSavedCPUStates(res.data);
      setCpuIndex(0);
      setRegisterValues(tempReg);
    });
  };

  const compileProgram = () => {
    setCompiling(true);
  };

  let registerList = [];

  for (var i = 0; i < 32; i++) {
    let newRegister = (
      <Registers
        key={i}
        setRegisterValues={setRegisterValues}
        registerValues={registerValues}
        selectedRegister={selectedRegister}
        setSelectedRegister={setSelectedRegister}
        registerID={i}
        showRegisterArea={showRegisterArea}
        setShowRegisterArea={setShowRegisterArea}
        setCurrentInput={setCurrentInput}
      ></Registers>
    );

    registerList.push(newRegister);
  }

  return (
    <div className="App">
      <Navbar
        setAssemblyCode={setAssemblyCode}
        assemblyCode={assemblyCode}
      ></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab
              numberFormat={numberFormat}
              setCpuState={setCpuState}
              cpuState={cpuState}
              compiling={compiling}
              executed={executed}
              setCompiling={setCompiling}
              setMemoryValues={setMemoryValues}
              memoryValues={memoryValues}
              defineLatency={defineLatency}
              setDefineLatency={setDefineLatency}
              relevantLines={relevantLines}
              assemblyCode={assemblyCode}
              setAssemblyCode={setAssemblyCode}
            ></ViewTab>
            <div className="buttonsArea container">
              <div className="row justify-content-between py-3">
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
            <div className="container px-0 row">
              <div className="col-3 px-2">{registerList.slice(0, 8)}</div>
              <div className="col-3 px-2">{registerList.slice(8, 16)}</div>
              <div className="col-3 px-2">{registerList.slice(16, 24)}</div>
              <div className="col-3 px-2">{registerList.slice(24, 32)}</div>
            </div>
            {showRegisterArea ? (
              <div className="container-fluid px-0">
                <div className="row">
                  <ul className="list-group mx-auto my-3 w-75">
                    <div className="input-group">
                      <span class="input-group-text numFormatField">HEX</span>
                      <input
                        type="text"
                        value={(parseInt(currentInput, 10) >>> 0).toString(16)}
                        onChange={(e) => {
                          setCurrentInput(
                            (parseInt(e.target.value, 16) >>> 0).toString(10)
                          );
                          let auxRegs = registerValues.slice();
                          auxRegs[selectedRegister][1] = (
                            parseInt(e.target.value, 16) >>> 0
                          ).toString(10);
                          setRegisterValues(auxRegs);
                        }}
                        class="form-control"
                      ></input>
                    </div>
                    <div className="input-group">
                      <span class="input-group-text numFormatField">BIN </span>
                      <input
                        type="text"
                        value={(parseInt(currentInput, 10) >>> 0).toString(2)}
                        onChange={(e) => {
                          setCurrentInput(
                            (parseInt(e.target.value, 2) >>> 0).toString(10)
                          );
                          let auxRegs = registerValues.slice();
                          auxRegs[selectedRegister][1] = (
                            parseInt(e.target.value, 2) >>> 0
                          ).toString(10);
                          setRegisterValues(auxRegs);
                        }}
                        class="form-control"
                      ></input>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="formatArea text-center m-4">
              <div
                className="w-50 btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
