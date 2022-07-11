import { useEffect, useState } from "react";

function Registers(props) {
  const [input, setInput] = useState("");

  const mystyle = {
    fontSize: "10px",
    fontWeight: 600,
    width: "3.3em",
  };

  const showArea = () => {
    props.setShowRegisterArea(
      !props.showRegisterArea || props.registerID !== props.selectedRegister
    );
    switchSelectedRegister();
  };

  const switchSelectedRegister = () => {
    props.setSelectedRegister(props.registerID);
    props.setCurrentInput(input);
  };

  useEffect(() => {
    props.setCurrentInput(input);
    if (props.registerValues.length > 0) {
      let auxRegs = props.registerValues.slice();
      auxRegs[props.registerID][1] = input;
      props.setRegisterValues(auxRegs);
    }
  }, [input]);

  useEffect(() => {
    if (props.registerValues.length > 0) {
      setInput(props.registerValues[props.registerID][1]);
    }
  }, [props.registerValues]);

  return (
    <div
      className={"input-group input-group-sm my-2 register" + props.registerID}
    >
      <button
        style={mystyle}
        className="btn btn-outline-secondary"
        type="button"
        onClick={showArea}
        id="button-addon1"
      >
        {"X" + props.registerID}
      </button>
      <input
        id={"Reg" + props.registerID}
        type="number"
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
        }}
        onClick={switchSelectedRegister}
        className="form-control"
        placeholder="0"
        aria-label="Username"
        aria-describedby="basic-addon1"
      ></input>
    </div>
  );
}

export default Registers;
