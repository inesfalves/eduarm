import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Registers from "./Registers.js";
import ViewTab from "./ViewTab.js";
import "./App.css";
import DataMemoryDisplay from "./DataMemoryDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPlay,
  faLayerGroup,
  faCubesStacked,
  faRotateLeft,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

function App() {
  const [cpuState, setCpuState] = useState([]);
  const [cpuIndex, setCpuIndex] = useState(0);
  const [registerValues, setRegisterValues] = useState([]);
  const [memoryValues, setMemoryValues] = useState([]);
  const [executed, setExecuted] = useState(false);
  const [savedCPUStates, setSavedCPUStates] = useState([]);
  const [numberFormat, setNumberFormat] = useState("DEC");
  const [defineLatency, setDefineLatency] = useState(false);
  const [relevantLines, setRelevantLines] = useState([]);
  const [criticalPath, setCriticalPath] = useState([]);
  const [assemblyCode, setAssemblyCode] = useState(``);
  const [showRegisterArea, setShowRegisterArea] = useState(true);
  const [currentInput, setCurrentInput] = useState(0);
  const [currentHexInput, setCurrentHexInput] = useState(0);
  const [currentBinInput, setCurrentBinInput] = useState(0);
  const [selectedRegister, setSelectedRegister] = useState(0);
  const [perfMode, setPerfMode] = useState(false);
  const [assembly, setAssembly] = useState(false);

  let tempReg = [];
  for (let i = 0; i < 32; i++) {
    let registerMap = [i, ""];
    tempReg.push(registerMap);
  }

  const get64binary = (int) => {
    if (int === "") {
      int = 0;
    }
    if (int >= 0) return parseInt(int, 10).toString(2);
    return (-parseInt(int, 10) - 1).toString(2).replace(/[01]/g, function (d) {
      return +!+d;
    });
  };

  const pad64Binary = (str) => {
    let int = parseInt(str, 2).toString(10);
    if (int >= 0) {
      return str.padStart(64, "0");
    } else {
      return str.padStart(64, "1");
    }
  };

  const get64Hexadecimal = (int) => {
    if (int === "") {
      int = 0;
    }
    let hexa = (parseInt(int, 10) >>> 0).toString(16);

    return hexa;
  };

  const pad64Hexadecimal = (str) => {
    let int = parseInt(str, 16).toString(10);
    for (let i = str.length; i < 16; i++) {
      if (int >= 0) {
        str = "0" + str;
      } else {
        str = "f" + str;
      }
    }
    return str;
  };

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

  const performanceMode = () => {
    setPerfMode(true);
    axios.get("http://localhost:3001/getCriticalPath").then(function (res) {
      setCriticalPath(res.data);
    });
  };

  const resetProgram = () => {
    axios.get("http://localhost:3001/reset").then(function (res) {
      setExecuted(false);
      setSavedCPUStates(res.data);
      setCpuIndex(0);
      setRegisterValues(tempReg);
    });
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
        setCurrentInput={(input) => {
          setCurrentInput(input);
          setCurrentHexInput(pad64Hexadecimal(get64Hexadecimal(input)));
          setCurrentBinInput(pad64Binary(get64binary(input)));
        }}
      ></Registers>
    );

    registerList.push(newRegister);
  }

  return (
    <div className="App">
      <Navbar
        setAssemblyCode={setAssemblyCode}
        assemblyCode={assemblyCode}
        assembly={assembly}
      ></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab
              numberFormat={numberFormat}
              setCpuState={setCpuState}
              cpuState={cpuState}
              executed={executed}
              setMemoryValues={setMemoryValues}
              memoryValues={memoryValues}
              defineLatency={defineLatency}
              setDefineLatency={setDefineLatency}
              relevantLines={relevantLines}
              assemblyCode={assemblyCode}
              setAssemblyCode={setAssemblyCode}
              criticalPath={criticalPath}
              perfMode={perfMode}
              setAssembly={setAssembly}
            ></ViewTab>
          </div>
          <div className="col-4 p-0">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item col-6" role="presentation">
                <button
                  className="nav-link active col-12"
                  id="reg-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reg"
                  type="button"
                  role="tab"
                  aria-controls="reg"
                  aria-selected="true"
                >
                  <FontAwesomeIcon icon={faCubesStacked} className="mx-2" />
                  REGISTERS
                </button>
              </li>
              <li className="nav-item col-6" role="presentation">
                <button
                  className="nav-link col-12"
                  id="memory-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#memory"
                  type="button"
                  role="tab"
                  aria-controls="memory"
                  aria-selected="false"
                >
                  <FontAwesomeIcon icon={faLayerGroup} className="mx-2" />
                  DATA MEMORY
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="reg"
                role="tabpanel"
                aria-labelledby="reg-tab"
              >
                <div className="container px-0 mx-auto row">
                  <div className="col-3 px-2">{registerList.slice(0, 8)}</div>
                  <div className="col-3 px-2">{registerList.slice(8, 16)}</div>
                  <div className="col-3 px-2">{registerList.slice(16, 24)}</div>
                  <div className="col-3 px-2">{registerList.slice(24, 32)}</div>
                </div>
                <div className="container text-center mt-3">
                  <div className="btn-group btn-group w-75" role="group">
                    <button
                      onClick={getPrevious}
                      type="button"
                      className="btn btn-outline-dark col-3 p-1"
                    >
                      <FontAwesomeIcon icon={faBackward} className="mx-2" />
                      Previous
                    </button>
                    <button
                      onClick={executeProgram}
                      type="button"
                      className="btn btn-outline-primary col-5 p-1"
                    >
                      <FontAwesomeIcon icon={faPlay} className="mx-2" />
                      Execute
                    </button>
                    <button
                      onClick={getNext}
                      type="button"
                      className="btn btn-outline-dark col-3 p-1"
                    >
                      <FontAwesomeIcon icon={faForward} className="mx-2" />
                      Next
                    </button>
                  </div>
                  <div className="row justify-content-around py-3 mx-auto">
                    <button
                      onClick={resetProgram}
                      type="button"
                      className="btn btn-outline-dark col-3 p-0"
                    >
                      <FontAwesomeIcon icon={faRotateLeft} className="mx-2" />
                      Reset
                    </button>
                    <button
                      onClick={performanceMode}
                      type="button"
                      className="btn btn-outline-dark col-3 p-0"
                    >
                      <FontAwesomeIcon
                        icon={faGaugeSimpleHigh}
                        className="mx-2"
                      />
                      Performance
                    </button>
                  </div>
                  <div className="row mx-auto">hi</div>
                  {/* buscar a instruçao atual atraves do cpu state? */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="memory"
                role="tabpanel"
                aria-labelledby="memory-tab"
              >
                <DataMemoryDisplay
                  executed={executed}
                  cpuState={cpuState}
                  memoryValues={memoryValues}
                ></DataMemoryDisplay>
              </div>
            </div>
          </div>
          {showRegisterArea ? (
            <div className="container my-4">
              <div className="row align-items-center">
                <div className="col-1 text-center">
                  <span style={{ fontSize: 17 + "px" }}>
                    Register X{selectedRegister}
                  </span>
                </div>
                <div
                  className="col-4 input-group formatInputArea mx-2"
                  style={{ width: "40%", padding: 0 }}
                >
                  <span className="input-group-text numFormatField">HEX</span>
                  <input
                    type="text"
                    value={currentHexInput}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        let val = parseInt(currentHexInput, 16);
                        setCurrentInput(val);
                        setCurrentBinInput(val);

                        let auxRegs = registerValues.slice();
                        auxRegs[selectedRegister][1] = (val >>> 0).toString(10);
                        setRegisterValues(auxRegs);
                      }
                    }}
                    onChange={(e) => {
                      setCurrentHexInput(
                        e.target.value.replace(/[^0-9A-Fa-f]/g, "")
                      );
                    }}
                    className="form-control"
                    style={{ fontSize: 18 + "px" }}
                  ></input>
                </div>
                <div
                  className="col-2 input-group formatInputArea"
                  style={{ width: "50%", padding: 0 }}
                >
                  <span className="input-group-text numFormatField">BIN </span>
                  <input
                    type="text"
                    value={currentBinInput}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        let val = parseInt(currentBinInput, 2);
                        setCurrentInput(val);
                        setCurrentHexInput(val);

                        let auxRegs = registerValues.slice();
                        auxRegs[selectedRegister][1] = (val >>> 0).toString(10);
                        setRegisterValues(auxRegs);
                      }
                    }}
                    onChange={(e) => {
                      setCurrentBinInput(e.target.value.replace(/[^0-1]/g, ""));
                    }}
                    className="form-control"
                    style={{ fontSize: 18 + "px" }}
                  ></input>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
