const Component = require("./Component.js");
const ALUControlValues = require("./control/ALUControlValues.js");

let aluctrlValues = new ALUControlValues();
aluctrlValues.initializeALUControl();

class ALUControl extends Component {
  constructor(id, json) {
    super(id, json);

    //ALUControl input values

    //this.ALUOp = super.addInput("ALUOp", 0);

    this.ALUOp0 = super.addInput(json.input[0], 1);
    this.ALUOp1 = super.addInput(json.input[0], 0);

    this.opcode = super.addInput(json.input[1], 1112);

    //ALUControl output values
    this.ctrlALU = super.addOutput(json.output, 0);
  }

  execute(controlUnit) {
    this.opcode.value = controlUnit.controlInput.value;
    for (let i = 0; i < controlUnit.outputValues.length; i++) {
      if (controlUnit.outputValues[i].id === this.ALUOp0.id) {
        this.ALUOp0.value = controlUnit.outputValues[i].value;
      }
      if (controlUnit.outputValues[i].id === this.ALUOp1.id) {
        this.ALUOp1.value = controlUnit.outputValues[i].value;
      }
    }

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
