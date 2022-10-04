import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Registers from "./Registers.js";
import ViewTab from "./ViewTab.js";
import "./App.css";
import DataMemoryDisplay from "./DataMemoryDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "./Constants.js";
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
axios.defaults.withCredentials = true;

function App() {
  const [cpuState, setCpuState] = useState([]);
  const [cpuIndex, setCpuIndex] = useState(0);
  const [registerValues, setRegisterValues] = useState([]);
  const [memoryValues, setMemoryValues] = useState([]);
  const [executed, setExecuted] = useState(false);
  const [compiled, setCompiled] = useState(false);
  const [savedCPUStates, setSavedCPUStates] = useState([]);
  const [savedRelevantLines, setSavedRelevantLines] = useState([]);
  const [savedCriticalPath, setSavedCriticalPath] = useState([]);
  const [numberFormat, setNumberFormat] = useState("DEC");
  const [cpuVer, setCpuVer] = useState("Unicycle");
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
  const [datapath, setDatapath] = useState(true);
  const [instructionFlow, setInstructionFlow] = useState(null);
  const [errorsFound, setErrorsFound] = useState(false);
  const [instructions, setInstructions] = useState([]);
  const [memoryLines, setMemoryLines] = useState([]);
  const [pipeStages, setPipeStages] = useState([]);

  let tempReg = [];
  for (let i = 0; i < 32; i++) {
    let registerMap = [i, ""];
    tempReg.push(registerMap);
  }

  const setMemoryLinesHelper = (memoryLines) => {
    setMemoryLines(memoryLines);
  };

  const highlightCurrentInstruction = (instruction) => {
    let codeLines = document.getElementsByClassName("code-line");
    for (let i = 0; i < codeLines.length; i++) {
      if (codeLines[i].innerText.includes(instruction) && i === cpuIndex) {
        codeLines[i].style = "color: #00ADEE";
      } else {
        codeLines[i].style = "color: black";
      }
    }
  };

  useEffect(() => {
    if (executed && cpuVer === "Unicycle")
      highlightCurrentInstruction(instructionDisplayed);
  }, [cpuIndex]);

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
    resetProgram();
  }, []);

  const updateRegisters = (data) => {
    for (let comp of data) {
      if (comp.id === "RegBank" || comp.id === "PipelineRegBank") {
        setRegisterValues(comp.registers);
      }
    }
  };

  const getPipelineInstructionArray = (num) => {
    let arr1 = instructionFlow
      .slice()
      .splice(Math.max(0, num - 4), Math.min(num + 1, 5));
    arr1.reverse();
    let arr2 = [];
    for (let i = 0; i < 5; i++) {
      if (i < arr1.length) {
        if (arr1[i] < instructions.length) {
          arr2.push(instructions[arr1[i]]);
        } else {
          arr2.push("");
        }
      } else {
        arr2.push("");
      }
    }
    setPipeStages(arr2);
  };

  useEffect(() => {
    if (executed && cpuVer === "Pipeline") {
      getPipelineInstructionArray(cpuIndex);
    }
  }, [cpuIndex]);

  /*if (instructionFlow !== null) {
    console.log(getPipelineInstructionArray(cpuIndex));
  }*/

  useEffect(() => {
    let tempIns = assemblyCode.split("\n");
    for (let i = 0; i < tempIns.length; i++) {
      if (tempIns[i].endsWith(":")) {
        tempIns.splice(i, 1);
      }
    }
    setInstructions(tempIns);
  }, [assemblyCode]);

  const executeProgram = () => {
    if (executed) {
      resetProgram();
    }
    if (compiled) {
      setExecuted(true);
      setCompiled(false);
      setInstructionDisplayed(instructions[instructions.length - 1]);
      axios
        .post(BASE_URL + ":3001/sendRegisters", registerValues, {
          withCredentials: true,
          credentials: "include",
        })
        .then(() => {
          axios
            .get(BASE_URL + ":3001/execute", { withCredentials: true })
            .then(function (res) {
              setInstructionFlow(res.data.instructionFlow);
              setSavedCPUStates(res.data.cpuStates);
              setSavedRelevantLines(res.data.relevantLines);
              setSavedCriticalPath(res.data.criticalPath);
              setCpuState(res.data.cpuStates[res.data.cpuStates.length - 1]);
              setCpuIndex(res.data.cpuStates.length - 1);
              setRelevantLines(
                res.data.relevantLines[res.data.cpuStates.length - 1]
              );
              setCriticalPath(
                res.data.criticalPath[res.data.cpuStates.length - 1]
              );
              updateRegisters(
                res.data.cpuStates[res.data.cpuStates.length - 1]
              );
            });
        });
    } else {
      alert("Please compile the program before executing!");
    }
  };

  const compileProgram = () => {
    if (executed) {
      resetProgram(false);
    }
    setCompiled(true);
  };

  useEffect(() => {
    if (errorsFound) {
      alert("Please check for syntax errors before compiling!");
    }
  }, [errorsFound]);

  const getPrevious = () => {
    if (cpuIndex > 0) {
      let currInst = getPreviousElement(instructions);
      setInstructionDisplayed(currInst);
      setCpuState(savedCPUStates[cpuIndex - 1]);
      setRelevantLines(savedRelevantLines[cpuIndex - 1]);
      setCriticalPath(savedCriticalPath[cpuIndex - 1]);
      updateRegisters(savedCPUStates[cpuIndex - 1]);
      setCpuIndex(cpuIndex - 1);
    }
  };

  const getNext = () => {
    if (cpuIndex < savedCPUStates.length - 1) {
      let currInst = getNextElement(instructions);
      setInstructionDisplayed(currInst);
      setCpuState(savedCPUStates[cpuIndex + 1]);
      setRelevantLines(savedRelevantLines[cpuIndex + 1]);
      setCriticalPath(savedCriticalPath[cpuIndex + 1]);
      updateRegisters(savedCPUStates[cpuIndex + 1]);
      setCpuIndex(cpuIndex + 1);
    }
  };

  const getPreviousElement = (array) => {
    if (cpuIndex > 0) {
      return array[instructionFlow[cpuIndex - 1]];
    } else {
      return null;
    }
  };

  const getNextElement = (array) => {
    if (cpuIndex < savedCPUStates.length - 1) {
      return array[instructionFlow[cpuIndex + 1]];
    } else {
      return null;
    }
  };

  const getCurrentInstruction = () => {
    let insMem = cpuState.find((element) => element.id === "InsMem");

    if (insMem === undefined) {
      return "";
    }

    let instruction = insMem.assembledInstructions[instructionFlow[cpuIndex]];
    return [instruction, instructionDisplayed];
  };

  const getInstructionTypeCodes = (instructionCode, instruction) => {
    let instructionMap = new Map();
    if (instruction === "" || instruction === undefined) {
      return "";
    }
    let ins = instruction.split(" ");

    if (ins[0].endsWith(":")) {
      ins = ins.slice(1);
    }
    let type = ins[0];

    switch (type) {
      case "add":
      case "sub":
      case "and":
      case "orr":
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
        instructionMap.set("opcode", instructionCode.substring(0, 6));
        instructionMap.set("address", instructionCode.substring(6, 32));
        return instructionMap;
    }
  };

  const performanceMode = () => {
    setPerfMode(true);
  };

  const resetProgram = (cleanRegisters = true) => {
    axios
      .get(BASE_URL + ":3001/reset", { withCredentials: true })
      .then(function (res) {
        resetFrontend(cleanRegisters);
      });
  };

  const resetFrontend = (cleanRegisters) => {
    setSavedCPUStates([]);
    setCpuIndex(0);
    setRelevantLines([]);
    setCriticalPath([]);
    setPerfMode(false);
    setInstructionDisplayed(null);
    setExecuted(false);
    setMemoryLines([]);

    if (cleanRegisters) {
      setRegisterValues(tempReg);
      setCompiled(false);
    }
  };

  useEffect(() => {
    resetFrontend();
  }, [cpuVer]);

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
          setCurrentInput(BigInt(input));
          setCurrentHexInput(pad64Hexadecimal(BigInt(input)));
          setCurrentBinInput(pad64Binary(BigInt(input)));
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
        datapath={datapath}
        setNumberFormat={setNumberFormat}
        setCpuVer={setCpuVer}
        cpuVer={cpuVer}
        resetFrontend={resetFrontend}
      ></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab
              numberFormat={numberFormat}
              cpuVer={cpuVer}
              setCpuState={setCpuState}
              cpuState={cpuState}
              executed={executed}
              relevantLines={relevantLines}
              assemblyCode={assemblyCode}
              setAssemblyCode={setAssemblyCode}
              setDatapath={setDatapath}
              criticalPath={criticalPath}
              perfMode={perfMode}
              setAssembly={setAssembly}
              setErrorsFound={setErrorsFound}
              compiled={compiled}
              setCompiled={setCompiled}
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
                  <div className="btn-group w-75 mx-auto" role="group">
                    <button
                      onClick={getPrevious}
                      type="button"
                      className="btn btn-outline-dark col-3 p-0"
                    >
                      <FontAwesomeIcon icon={faBackward} className="mx-1" />
                      Previous
                    </button>
                    <button
                      onClick={compileProgram}
                      type="button"
                      className="btn btn-outline-primary col-5 p-1"
                    >
                      Compile
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
                      className="btn btn-outline-dark col-3 p-0"
                    >
                      <FontAwesomeIcon icon={faForward} className="mx-1" />
                      Next
                    </button>
                  </div>
                  <div className="row justify-content-center py-2 mx-auto">
                    <button
                      onClick={resetProgram}
                      type="button"
                      className="btn btn-outline-dark col-3 p-0"
                    >
                      <FontAwesomeIcon icon={faRotateLeft} className="mx-1" />
                      Reset
                    </button>
                    <div className="col-2 p-0">
                      {executed
                        ? cpuIndex + 1 + "/" + savedCPUStates.length
                        : ""}
                    </div>
                    <button
                      onClick={performanceMode}
                      type="button"
                      className="btn btn-outline-dark col-4 p-0"
                    >
                      <FontAwesomeIcon
                        icon={faGaugeSimpleHigh}
                        className="mx-2"
                      />
                      Performance
                    </button>
                  </div>
                  {cpuVer === "Unicycle" ? (
                    <div className="container my-1">
                      {executed ? (
                        <div>
                          <div className="text-center mt-1 row">
                            {instructionDisplayed !== null
                              ? getInstructionTypeCodes(
                                  getCurrentInstruction()[0],
                                  getCurrentInstruction()[1]
                                ) !== ""
                                ? Array.from(
                                    getInstructionTypeCodes(
                                      getCurrentInstruction()[0],
                                      getCurrentInstruction()[1]
                                    ).entries()
                                  ).map(([key, value]) => (
                                    <div key={"div" + key} className="col p-0">
                                      <div
                                        key={"row" + key}
                                        className="row m-0 text-center"
                                      >
                                        <span key={key}>{value}</span>
                                      </div>
                                      <div
                                        key={"div2" + key}
                                        className="row m-0 text-center"
                                        style={{ color: "purple" }}
                                      >
                                        <span key={value}>{key}</span>
                                      </div>
                                    </div>
                                  ))
                                : ""
                              : ""}
                          </div>
                          <div
                            className="text-center mt-2"
                            style={{ color: "#0d6dfd" }}
                          >
                            {instructionDisplayed !== null
                              ? getCurrentInstruction()[1]
                              : ""}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : executed ? (
                    <div className="container mt-2 w-50">
                      <div className="text-center mt-1 row">
                        <ul className="m-0 p-0">
                          <li className="stage row m-0 text-center">
                            <span className="col-3" style={{ color: "purple" }}>
                              IF
                            </span>
                            <span className="col-9"> {pipeStages[0]} </span>
                          </li>
                          <li className="stage row m-0 text-center">
                            <span className="col-3" style={{ color: "purple" }}>
                              ID
                            </span>
                            <span className="col-9"> {pipeStages[1]} </span>
                          </li>
                          <li className="stage row m-0 text-center">
                            <span className="col-3" style={{ color: "purple" }}>
                              EX
                            </span>
                            <span className="col-9"> {pipeStages[2]} </span>
                          </li>
                          <li className="stage row m-0 text-center">
                            <span
                              className="text-center col-3"
                              style={{ color: "purple" }}
                            >
                              MEM
                            </span>
                            <span className="col-9"> {pipeStages[3]} </span>
                          </li>
                          <li className="stage row m-0 text-center">
                            <span className="col-3" style={{ color: "purple" }}>
                              WB
                            </span>
                            <span className="col-9"> {pipeStages[4]} </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="memory"
                role="tabpanel"
                aria-labelledby="memory-tab"
              >
                <DataMemoryDisplay
                  cpuVer={cpuVer}
                  executed={executed}
                  cpuState={cpuState}
                  memoryValues={memoryValues}
                  memoryLines={memoryLines}
                  setMemoryLines={setMemoryLinesHelper}
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
