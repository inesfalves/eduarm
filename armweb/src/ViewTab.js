import "bootstrap/dist/js/bootstrap.js";
import Datapath from "./Datapath.js";
import Assembly from "./Assembly.js";
import MachineCode from "./MachineCode.js";
import DataMemoryDisplay from "./DataMemoryDisplay";
import { useState } from "react";

function ViewTab(props) {
  const [machineCodes, setMachineCodes] = useState([]);
  const [instructions, setInstructions] = useState([]);
  return (
    <div style={{ height: 89 + "%", width: 100 + "%" }}>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="cpu-tab"
            data-bs-toggle="tab"
            data-bs-target="#cpu"
            type="button"
            role="tab"
            aria-controls="cpu"
            aria-selected="true"
          >
            CPU
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="assembly-tab"
            data-bs-toggle="tab"
            data-bs-target="#assembly"
            type="button"
            role="tab"
            aria-controls="assembly"
            aria-selected="false"
          >
            ASSEMBLY
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="machine-tab"
            data-bs-toggle="tab"
            data-bs-target="#machine"
            type="button"
            role="tab"
            aria-controls="machine"
            aria-selected="false"
          >
            MACHINE CODE
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="memory-tab"
            data-bs-toggle="tab"
            data-bs-target="#memory"
            type="button"
            role="tab"
            aria-controls="memory"
            aria-selected="false"
          >
            DATA MEMORY
          </button>
        </li>
      </ul>
      <div className="tab-content h-100" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="cpu"
          role="tabpanel"
          aria-labelledby="cpu-tab"
          style={{
            height: 35.5 + "em",
            width: 64 + "em",
            maxHeight: 35.5 + "em",
            maxWidth: 80 + "em",
          }}
        >
          <Datapath
            executed={props.executed}
            cpuState={props.cpuState}
          ></Datapath>
        </div>
        <div
          className="tab-pane fade"
          id="assembly"
          role="tabpanel"
          aria-labelledby="assembly-tab"
          style={{
            height: 35.5 + "em",
            width: 64 + "em",
            maxHeight: 35.5 + "em",
            maxWidth: 80 + "em",
          }}
        >
          {" "}
          <Assembly
            compiling={props.compiling}
            setCompiling={props.setCompiling}
            machineCodes={machineCodes}
            setMachineCodes={setMachineCodes}
            setInstructions={setInstructions}
            instructions={instructions}
          ></Assembly>
        </div>
        <div
          className="tab-pane fade"
          id="machine"
          role="tabpanel"
          aria-labelledby="machine-tab"
        >
          <MachineCode
            compiling={props.compiling}
            setCompiling={props.setCompiling}
            machineCodes={machineCodes}
            instructions={instructions}
          ></MachineCode>
        </div>
        <div
          className="tab-pane fade"
          id="memory"
          role="tabpanel"
          aria-labelledby="memory-tab"
        >
          <DataMemoryDisplay
            executed={props.executed}
            cpuState={props.cpuState}
            memoryValues={props.memoryValues}
          ></DataMemoryDisplay>
        </div>
      </div>
    </div>
  );
}

export default ViewTab;
