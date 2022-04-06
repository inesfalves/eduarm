import Navbar from "./Navbar.js";
import Registers from "./Registers.js";
import ViewTab from "./ViewTab.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 px-0">
            <ViewTab></ViewTab>
          </div>
          <div className="registersArea col-4">
            <p className="text-uppercase text-center fw-normal mt-2">
              Registers
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <Registers registerID="X0"></Registers>
                  <Registers registerID="X1"></Registers>
                  <Registers registerID="X2"></Registers>
                  <Registers registerID="X3"></Registers>
                  <Registers registerID="X4"></Registers>
                  <Registers registerID="X5"></Registers>
                  <Registers registerID="X6"></Registers>
                  <Registers registerID="X7"></Registers>
                  <Registers registerID="X8"></Registers>
                  <Registers registerID="X9"></Registers>
                  <Registers registerID="X10"></Registers>
                  <Registers registerID="X11"></Registers>
                  <Registers registerID="X12"></Registers>
                  <Registers registerID="X13"></Registers>
                  <Registers registerID="X14"></Registers>
                  <Registers registerID="X15"></Registers>
                </div>
                <div className="col-6">
                  <Registers registerID="X16"></Registers>
                  <Registers registerID="X17"></Registers>
                  <Registers registerID="X18"></Registers>
                  <Registers registerID="X19"></Registers>
                  <Registers registerID="X20"></Registers>
                  <Registers registerID="X21"></Registers>
                  <Registers registerID="X22"></Registers>
                  <Registers registerID="X23"></Registers>
                  <Registers registerID="X24"></Registers>
                  <Registers registerID="X25"></Registers>
                  <Registers registerID="X26"></Registers>
                  <Registers registerID="X27"></Registers>
                  <Registers registerID="X28"></Registers>
                  <Registers registerID="X29"></Registers>
                  <Registers registerID="X30"></Registers>
                  <Registers registerID="X31"></Registers>
                </div>
              </div>
              <div className="text-center m-4">
                <div
                  className="w-50 btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    DEC
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    BIN
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    HEX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
