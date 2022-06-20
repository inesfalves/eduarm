import { useEffect, useState } from "react";

function Registers(props) {
  const [input, setInput] = useState("");

  const mystyle = {
    fontSize: "10px",
  };

  useEffect(() => {
    if (props.registerValues.length > 0) {
      let auxRegs = props.registerValues.slice();
      auxRegs[props.registerID][1] = input;
      props.setRegisterValues(auxRegs);
    }
  }, [input]);

  useEffect(() => {
    if (props.registerValues.length > 0) {
      let inputElement = document.getElementById("Reg" + props.registerID);
      inputElement.value = props.registerValues[props.registerID][1];
    }
  }, [props.registerValues]);

  return (
    <div className="input-group input-group-sm mb-1">
      <span style={mystyle} className="input-group-text" id="basic-addon1">
        {"X" + props.registerID}
      </span>
      <input
        id={"Reg" + props.registerID}
        type="number"
        title={
          "DEC: " +
          input +
          "\n" +
          "HEX: " +
          (input === "" ? "" : parseInt(input, 10).toString(16)) +
          "\n" +
          "BIN: " +
          (input === "" ? "" : parseInt(input, 10).toString(2))
        }
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
        }}
        className="form-control"
        placeholder="0"
        aria-label="Username"
        aria-describedby="basic-addon1"
      ></input>
    </div>
  );
}

export default Registers;
