const Component = require("./Component.js");
const Data = require("./Data.js");

//The register containing the address of the instruction in the program being executed
class ProgramCounter extends Component {
  constructor(id, json) {
    super(id, json);

    super.isSynchronous = true;

    if (Array.isArray(json.input)) {
      this.updatedPC = super.addInput(json.input[0], new Data(0, 0));
      this.pcWrite = super.addInput(json.input[1], new Data(0, 0));
    } else {
      this.updatedPC = super.addInput(json.input, new Data(0, 0));
    }

    this.pcValue = super.addOutput(json.output, new Data(0, 0));

    this.auxAddress = new Data(0, 0);

    super.latency = json.latency;
  }

  execute() {
    //Send the new pc to the instruction memory
    this.pcValue.value = this.auxAddress.value;
  }

  executeClockTransition() {
    //If pipeline, will only this if control signal is active
    this.auxAddress.value = this.updatedPC.value;
  }

  printValues() {
    console.log("\n");
    console.log("PROGRAM COUNTER");

    console.log("=======INPUTS======= ");
    console.log("Updated PC: " + this.updatedPC.value);

    console.log("=======OUTPUTS======= ");
    console.log("PC: " + this.pcValue.value);
  }
}

module.exports = ProgramCounter;
