const Component = require("./Component.js");
const ControlValues = require("./control/ControlValues.js");

let component = new Component(1);
let controlValues = new ControlValues();
controlValues.initializeControl();

class Control {
  constructor(id) {
    this.id = id;

    //Control input values
    //Bits 31 to 21 or 31 to 24
    this.controlInput = component.addInput("controlInput", 1112);

    //Control output values
    this.outputValues = [
      component.addOutput("Reg2Loc", 0),
      component.addOutput("ALUSrc", 0),
      component.addOutput("MemtoReg", 0),
      component.addOutput("RegWrite", 0),
      component.addOutput("MemRead", 0),
      component.addOutput("MemWrite", 0),
      component.addOutput("Branch", 0),
      component.addOutput("ALUOp1", 0),
      component.addOutput("ALUOp0", 0),
    ];
  }

  execute() {
    let jsonOutputValues = controlValues.getControlOutputs(
      this.controlInput.value
    );

    for (let i = 0; i < this.outputValues.length; i++) {
      this.outputValues[i].value = jsonOutputValues[this.outputValues[i].id];
    }
  }

  printValues() {
    console.log("\n");
    console.log("CONTROL UNIT");

    console.log("=======INPUTS======= ");
    console.log("Input 1: " + this.controlInput.value);

    console.log("=======OUTPUTS======= ");
    for (let i = 0; i < this.outputValues.length; i++) {
      console.log(this.outputValues[i].id + ": " + this.outputValues[i].value);
    }
  }
}

module.exports = Control;
