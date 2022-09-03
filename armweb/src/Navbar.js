import { useEffect, useState } from "react";
import { BASE_URL } from "./Constants.js";

const axios = require("axios");
axios.defaults.withCredentials = true;

function Navbar(props) {
  const [format, setFormat] = useState("DEC");
  const [cpuVersion, setCpuVersion] = useState("Unicycle");

  useEffect(() => {
    if (format === "DEC") {
      props.setNumberFormat("DEC");
    } else if (format === "HEX") {
      props.setNumberFormat("HEX");
    } else if (format === "BIN") {
      props.setNumberFormat("BIN");
    }
  }, [format]);

  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      props.setAssemblyCode(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([props.assemblyCode], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "assemblyCode.txt";
    document.body.appendChild(element);
    element.click();
  };

  const checkCPUVersion = () => {
    if (props.cpuVer === "Unicycle") {
      alert("You are now using the Pipeline CPU version!");
      props.resetFrontend();
      axios.post(
        BASE_URL + ":3001/changeCPUVersion",
        { cpuVer: "Pipeline" },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      props.setCpuVer("Pipeline");
    } else if (props.cpuVer === "Pipeline") {
      alert("You are now using the Unicycle CPU version!");
      props.resetFrontend();
      axios.post(
        BASE_URL + ":3001/changeCPUVersion",
        { cpuVer: "Unicycle" },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      props.setCpuVer("Unicycle");
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      {props.datapath ? (
        <div>
          <div className="dropdown" style={{ width: "4em" }}>
            <a
              className="btn btn-light dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Change format
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFormat("DEC")}
                >
                  Decimal
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFormat("BIN")}
                >
                  Binary
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFormat("HEX")}
                >
                  Hexadecimal
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-light"
          style={{
            width: "4em",
            visibility: props.assembly ? "visible" : "hidden",
          }}
        >
          <label htmlFor="file-upload">Load</label>
        </button>
      )}
      <input
        id="file-upload"
        type="file"
        onChange={showFile}
        style={{ visibility: props.assembly ? "visible" : "hidden" }}
      />
      <button
        type="button"
        className="btn btn-light"
        onClick={downloadTxtFile}
        style={{ visibility: props.assembly ? "visible" : "hidden" }}
      >
        Save
      </button>
      <a className="navbar-brand mx-auto" href="#">
        EduARM
      </a>
      <button
        type="button"
        className="btn btn-light mx-2"
        onClick={checkCPUVersion}
      >
        Change version
      </button>
    </nav>
  );
}

export default Navbar;
