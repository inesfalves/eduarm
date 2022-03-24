const Component = require("./Component.js");
const ALUControlValues = require("./control/ALUControlValues.js");

let component = new Component(1);
let aluctrlValues = new ALUControlValues();
aluctrlValues.initializeALUControl();

class ALUControl {
  constructor(id) {
    this.id = id;

    //ALUControl input values
    this.opcode = component.addInput("opcode", 1112);

    //this.ALUOp = component.addInput("ALUOp", 0);

    this.ALUOp0 = component.addInput("ALUOp0", 1);
    this.ALUOp1 = component.addInput("ALUOp1", 0);

    //ALUControl output values
    this.ctrlALU = component.addOutput("ALUControlSignal", 0);
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
