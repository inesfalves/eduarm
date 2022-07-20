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
  const [instructionDisplayed, setInstructionDisplayed] = useState(false);

  let tempReg = [];
  for (let i = 0; i < 32; i++) {
    let registerMap = [i, ""];
    tempReg.push(registerMap);
  }

  const getTwosComplementFromNegativeBinary = (num) => {
    let complement = "";
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "1") {
        complement += "0";
      } else {
        complement += "1";
      }
    }
    let aux = BigInt("0b" + complement);
    aux += 1n;
    return aux.toString(2);
  };

  const hex2binary = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let hex = str[i];
      let binary = parseInt(hex, 16).toString(2).padStart(4, "0");
      result += binary;
    }
    return result;
  };

  const pad64Binary = (int) => {
    let isNegative = int < 0;
    let str = "";
    if (isNegative) {
      str = BigInt(
        "0b" + getTwosComplementFromNegativeBinary(int.toString(2))
      ).toString(2);
      if (str.length > 64) {
        str = str.slice(str.length - 64);
      }
    } else {
      str = int.toString(2);
    }
    if (!isNegative) {
      return str.padStart(64, "0");
    } else {
      return str.padStart(64, "1");
    }
  };

  const pad64Hexadecimal = (int) => {
    let isNegative = int < 0;
    let str = "";
    if (isNegative) {
      str = BigInt(
        "0b" + getTwosComplementFromNegativeBinary(int.toString(2))
      ).toString(16);
      if (str.length > 16) {
        str = str.slice(str.length - 16);
      }
    } else {
      str = int.toString(16);
    }
    for (let i = str.length; i < 16; i++) {
      if (!isNegative) {
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
    setInstructionDisplayed(
      assemblyCode.split("\n")[assemblyCode.split("\n").length - 1]
    );
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
      let currInst = getPreviousElement(
        assemblyCode.split("\n"),
        instructionDisplayed
      );
      setInstructionDisplayed(currInst);
      setCpuState(savedCPUStates[cpuIndex - 1]);
      updateRegisters(savedCPUStates[cpuIndex - 1]);
      setCpuIndex(cpuIndex - 1);
    }
  };

  const getNext = () => {
    if (cpuIndex < savedCPUStates.length - 1) {
      let currInst = getNextElement(
        assemblyCode.split("\n"),
        instructionDisplayed
      );
      setInstructionDisplayed(currInst);
      setCpuState(savedCPUStates[cpuIndex + 1]);
      updateRegisters(savedCPUStates[cpuIndex + 1]);
      setCpuIndex(cpuIndex + 1);
    }
  };

  const getPreviousElement = (array, element) => {
    let index = array.indexOf(element);
    if (index > 0) {
      return array[index - 1];
    } else {
      return null;
    }
  };

  const getNextElement = (array, element) => {
    let index = array.indexOf(element);
    if (index < array.length - 1) {
      return array[index + 1];
    } else {
      return null;
    }
  };

  const getCurrentInstruction = () => {
    let insMem = cpuState.find((element) => element.id === "InsMem");
    if (insMem === undefined) {
      return "";
    }
    let instruction =
      insMem.assembledInstructions[insMem.assembledInstructions.length - 1];
    return [instruction, instructionDisplayed];
  };

  const getInstructionTypeCodes = (instructionCode, instruction) => {
    let instructionMap = new Map();
    if (instruction === "" || instruction === undefined) {
      return "";
    }
    let ins = instruction.split(" ");
    let type = ins[0];
    switch (type) {
      case "add":
      case "sub":
      case "and":
      case "or":
        instructionMap.set("opcode", instructionCode.substring(0, 11));
        instructionMap.set("rm", instructionCode.substring(11, 16));
        instructionMap.set("shamt", instructionCode.substring(16, 22));
        instructionMap.set("rn", instructionCode.substring(22, 27));
        instructionMap.set("rd", instructionCode.substring(27, 32));
        return instructionMap;
      case "stur":
      case "ldur":
        instructionMap.set("opcode", instructionCode.substring(0, 11));
        instructionMap.set("address", instructionCode.substring(11, 20));
        instructionMap.set("0", instructionCode.substring(20, 22));
        instructionMap.set("rn", instructionCode.substring(22, 27));
        instructionMap.set("rd", instructionCode.substring(27, 32));
        return instructionMap;
      case "cbz":
        instructionMap.set("opcode", instructionCode.substring(0, 8));
        instructionMap.set("address", instructionCode.substring(8, 27));
        instructionMap.set("rt", instructionCode.substring(27, 32));
        return instructionMap;
      case "b":
        return "B";
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
          setCurrentHexInput(pad64Hexadecimal(input));
          setCurrentBinInput(pad64Binary(input));
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
                <div className="container text-center my-2">
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
                  <div className="container my-1">
                    <div className="text-center mt-1 row">
                      {getInstructionTypeCodes(
                        getCurrentInstruction()[0],
                        getCurrentInstruction()[1]
                      ) !== ""
                        ? Array.from(
                            getInstructionTypeCodes(
                              getCurrentInstruction()[0],
                              getCurrentInstruction()[1]
                            ).entries()
                          ).map(([key, value]) => (
                            <div className="col p-0">
                              <div className="row m-0 text-center">
                                <span key={key}>{value}</span>
                              </div>
                              <div
                                className="row m-0 text-center"
                                style={{ color: "purple" }}
                              >
                                <span key={value}>{key}</span>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                    <div
                      className="text-center mt-2"
                      style={{ color: "#0d6dfd" }}
                    >
                      {getCurrentInstruction()[1]}
                    </div>
                  </div>
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
                        let isNegative = [
                          "8",
                          "9",
                          "A",
                          "B",
                          "C",
                          "D",
                          "E",
                          "F",
                          "a",
                          "b",
                          "c",
                          "d",
                          "e",
                          "f",
                        ].includes(currentHexInput[0]);
                        let val = null;
                        if (isNegative) {
                          val =
                            BigInt(
                              "0b" +
                                getTwosComplementFromNegativeBinary(
                                  hex2binary(currentHexInput)
                                )
                            ) * -1n;
                        } else {
                          val = BigInt("0x" + currentHexInput);
                        }

                        let auxRegs = registerValues.slice();
                        auxRegs[selectedRegister][1] = val;
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
                        let isNegative = currentBinInput[0] === "1";
                        let val = null;
                        if (isNegative) {
                          val =
                            BigInt(
                              "0b" +
                                getTwosComplementFromNegativeBinary(
                                  currentBinInput
                                )
                            ) * -1n;
                        } else {
                          val = BigInt("0b" + currentBinInput);
                        }

                        let auxRegs = registerValues.slice();
                        auxRegs[selectedRegister][1] = val;
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
