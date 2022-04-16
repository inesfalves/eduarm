const axios = require("axios");

const executeClockCycle = () => {
  axios.get("http://localhost:3001/execute").then(function (res) {
    console.log(res);
  });
};

function ButtonArea() {
  return (
    <div>
      <button
        onClick={executeClockCycle}
        type="button"
        className="btn btn-dark"
      >
        Execute
      </button>
    </div>
  );
}

export default ButtonArea;
