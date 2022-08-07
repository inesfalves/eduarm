import "bootstrap/dist/js/bootstrap.js";
import Datapath from "./Datapath.js";
import Assembly from "./Assembly.js";
import MachineCode from "./MachineCode.js";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faCode,
  fa0,
  fa1,
} from "@fortawesome/free-solid-svg-icons";

function ViewTab(props) {
  const [machineCodes, setMachineCodes] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [fileManage, setFileManage] = useState(false);
  const [formatChange, setFormatChange] = useState(true);

  useEffect(() => {
    if (fileManage) {
      props.setAssembly(true);
    } else {
      props.setAssembly(false);
    }
  }, [fileManage]);

  useEffect(() => {
    if (formatChange) {
      props.setDatapath(true);
    } else {
      props.setDatapath(false);
    }
  }, [formatChange]);

  return (
    <div className="viewtab">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link active col-12"
            id="cpu-tab"
            data-bs-toggle="tab"
            data-bs-target="#cpu"
            type="button"
            role="tab"
            aria-controls="cpu"
            aria-selected="true"
            onClick={() => {
              setFileManage(false);
              setFormatChange(true);
            }}
          >
            <FontAwesomeIcon icon={faMicrochip} className="mx-2" />
            CPU
          </button>
        </li>
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link col-12"
            id="assembly-tab"
            data-bs-toggle="tab"
            data-bs-target="#assembly"
            type="button"
            role="tab"
            aria-controls="assembly"
            aria-selected="false"
            onClick={() => {
              setFileManage(true);
              setFormatChange(false);
            }}
          >
            <FontAwesomeIcon icon={faCode} className="mx-2" />
            ASSEMBLY
          </button>
        </li>
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link col-12"
            id="machine-tab"
            data-bs-toggle="tab"
            data-bs-target="#machine"
            type="button"
            role="tab"
            aria-controls="machine"
            aria-selected="false"
            onClick={() => {
              setFileManage(false);
              setFormatChange(false);
            }}
          >
            <FontAwesomeIcon icon={fa0} />
            <FontAwesomeIcon icon={fa1} className="me-2" />
            MACHINE CODE
          </button>
        </li>
      </ul>
      <div
        className="tab-content"
        id="myTabContent"
        style={{ height: 75 + "vh" }}
      >
        <div
          className="tab-pane fade show active"
          id="cpu"
          role="tabpanel"
          aria-labelledby="cpu-tab"
          style={{
            height: 75 + "vh",
            width: 66.5 + "vw",
            maxWidth: 70 + "vw",
          }}
        >
          <Datapath
            defineLatency={props.defineLatency}
            setDefineLatency={props.setDefineLatency}
            numberFormat={props.numberFormat}
            cpuVer={props.cpuVer}
            executed={props.executed}
            setCpuState={props.setCpuState}
            cpuState={props.cpuState}
            relevantLines={props.relevantLines}
            criticalPath={props.criticalPath}
            perfMode={props.perfMode}
          ></Datapath>
        </div>
        <div
          className="tab-pane h-100 fade"
          id="assembly"
          role="tabpanel"
          aria-labelledby="assembly-tab"
        >
          <Assembly
            compiled={props.compiled}
            machineCodes={machineCodes}
            setMachineCodes={setMachineCodes}
            setInstructions={setInstructions}
            instructions={instructions}
            assemblyCode={props.assemblyCode}
            setAssemblyCode={props.setAssemblyCode}
            setErrorsFound={props.setErrorsFound}
          ></Assembly>
        </div>
        <div
          className="tab-pane fade"
          id="machine"
          role="tabpanel"
          aria-labelledby="machine-tab"
        >
          <MachineCode
            compiled={props.compiled}
            machineCodes={machineCodes}
            instructions={instructions}
          ></MachineCode>
        </div>
      </div>
    </div>
  );
}

export default ViewTab;
