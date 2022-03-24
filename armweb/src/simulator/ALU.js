const Component = require("./Component.js");

let component = new Component(1);

class ALU {
  constructor(id) {
    this.id = id;

    //ALU input values
    this.input1 = component.addInput("aluInput1", 0);
    this.input2 = component.addInput("aluInput2", 0);
    this.controlOp = component.addInput("controlOp", 0);

    //ALU output values
    this.zero = component.addOutput("aluZero", 0);
    this.aluResult = component.addOutput("aluResult", 0);
  }

  execute(regbank, operation) {
    //Takes as input the register bank output values
    this.input1.value = regbank.readData1.value;
    this.input2.value = regbank.readData2.value;

    //ignoring ALU control for now
    switch (operation) {
      case "ADD":
        this.aluResult.value = this.input1.value + this.input2.value;
        break;
      default:
        this.aluResult.value = 0;
        break;
    }

    //If the result of the operation is 0, "Zero" will be 1
    this.zero.value = this.aluResult.value === 0 ? 1 : 0;
  }

  printValues() {
    console.log("\n");
    console.log("ALU");

    console.log("=======INPUTS======= ");
    console.log("Input 1: " + this.input1.value);
    console.log("Input 2: " + this.input2.value);

    console.log("=======INPUTS IN BINARY======= ");
    console.log("Input 1: " + this.input1.value.toString(2));
    console.log("Input 2: " + this.input2.value.toString(2));

    console.log("=======OUTPUTS======= ");
    console.log("ALU Result: " + this.aluResult.value);
    console.log("Zero: " + this.zero.value);
  }
}

module.exports = ALU;
