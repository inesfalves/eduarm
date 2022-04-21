import { useEffect, useState } from "react";

function Registers(props) {
  const [input, setInput] = useState("");

  const mystyle = {
    fontSize: "10px",
  };

  useEffect(() => {
    let registerMap = new Map();
    let sameIndexID = props.registerValues.findIndex(
      (element) => element[0] === props.registerID
    );
    registerMap.set(props.registerID, input);
    if (sameIndexID !== -1) {
      let newRegs = props.registerValues.slice();
      newRegs.splice(sameIndexID, 1);
      props.setRegisterValues([...newRegs, ...registerMap]);
    } else {
      props.setRegisterValues([...props.registerValues, ...registerMap]);
    }
  }, [input]);

  return (
    <div className="input-group input-group-sm mb-1">
      <span style={mystyle} className="input-group-text" id="basic-addon1">
        {"X" + props.registerID}
      </span>
      <input
        type="number"
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
