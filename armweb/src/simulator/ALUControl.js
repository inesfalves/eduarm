const Component = require("./Component.js");

let component = new Component(1);

class ALUControl {
  constructor(id) {
    this.id = id;

    //ALUControl input values
    this.opcode = component.addInput("ALUopcode", 0);
    this.ALUOp = component.addInput("ALUOp", 0);

    //ALUControl output values
    this.ALUControlSignal = component.addOutput("ALUControlSignal", 0);
  }

  execute() {
    //Do something
  }

  printValues() {
    //Print something
  }
}

module.exports = ALUControl;
