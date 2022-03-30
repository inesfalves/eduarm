const Component = require("./Component.js");

//The register containing the address of the instruction in the program being executed
class ProgramCounter extends Component {
  constructor(id) {
    super(id);

    //Program counter input values
    this.updatedPC = super().addInput("updatedPC", 0);

    //Program counter output values
    this.pcValue = super().addOutput("PC", 0);
  }

  execute() {
    //Send the new pc to the instruction memory
    this.pcValue.value = this.updatedPC.value;
  }

  printValues() {}
}

module.exports = ProgramCounter;
