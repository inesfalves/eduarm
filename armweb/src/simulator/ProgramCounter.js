const Component = require("./Component.js");

//The register containing the address of the instruction in the program being executed
class ProgramCounter extends Component {
  constructor(id, json) {
    super(id, json);

    this.updatedPC = super.addInput(json.input, 0);

    this.pcValue = super.addOutput(json.output, 0);
  }

  execute() {
    //Send the new pc to the instruction memory
    this.pcValue.value = this.updatedPC.value;
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
