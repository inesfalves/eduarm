const Component = require("./Component.js");
const ALUControlValues = require("./control/ALUControlValues.js");
const Data = require("./Data.js");

let aluctrlValues = new ALUControlValues();
aluctrlValues.initializeALUControl();

class ALUControl extends Component {
  constructor(id, json) {
    super(id, json);

    //ALUControl input values

    //this.ALUOp = super.addInput("ALUOp", 0);

    this.ALUOp0 = super.addInput(json.input[0], new Data(0, 0));
    this.ALUOp1 = super.addInput(json.input[1], new Data(0, 0));

    this.opcode = super.addInput(json.input[2], new Data(0, 0));

    //ALUControl output values
    this.ctrlALU = super.addOutput(json.output, new Data(0, 0));
  }

  execute() {
    let jsonOutputValues = aluctrlValues.getALUControlValues(
      this.ALUOp0.value,
      this.ALUOp1.value,
      this.opcode.value
    );

    this.ctrlALU.value = jsonOutputValues.CtrlALU;
  }

  printValues() {
    console.log("\n");
    console.log("ALU CONTROL");

    console.log("=======INPUTS======= ");
    console.log("Opcode: " + this.opcode.value);
    console.log("ALUOp0: " + this.ALUOp0.value);
    console.log("ALUOp1: " + this.ALUOp1.value);

    console.log("=======OUTPUTS======= ");
    console.log("CtrlALU: " + this.ctrlALU.value);
  }
}

module.exports = ALUControl;
