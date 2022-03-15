function Registers(props) {
  const mystyle = {
    fontSize: "11px",
  };

  return (
    <div className="input-group input-group-sm mb-1">
      <span style={mystyle} className="input-group-text" id="basic-addon1">
        {props.registerID}
      </span>
      <input
        type="number"
        className="form-control"
        placeholder="0"
        aria-label="Username"
        aria-describedby="basic-addon1"
      ></input>
    </div>
  );
}

export default Registers;
