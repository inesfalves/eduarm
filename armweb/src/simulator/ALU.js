const Component = require("./Component.js");

class ALU extends Component {
  constructor(id) {
    super(id);

    //ALU input values
    this.input1 = super().addInput("aluInput1", 0);
    this.input2 = super().addInput("aluInput2", 0);
    this.controlOp = super().addInput("controlOp", 0);

    //ALU output values
    this.zero = super().addOutput("aluZero", 0);
    this.aluResult = super().addOutput("aluResult", 0);
  }

  execute(regbank, aluctrl) {
    //Takes as input the register bank output values
    this.input1.value = regbank.readData1.value;
    this.input2.value = regbank.readData2.value;
    this.controlOp.value = aluctrl.ctrlALU.value;

    //ignoring ALU control for now
    switch (this.controlOp.value) {
      case 2:
        console.log("ADD");
        this.aluResult.value = this.input1.value + this.input2.value;
        break;
      case 6:
        console.log("SUB");
        this.aluResult.value = this.input1.value - this.input2.value;
        break;
      case 0:
        console.log("AND");
        this.aluResult.value = this.input1.value && this.input2.value;
        break;
      case 1:
        console.log("ORR");
        this.aluResult.value = this.input1.value || this.input2.value;
        break;
      default:
        console.log("Other operation");
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
    console.log("Control Op: " + this.controlOp.value);

    console.log("=======OUTPUTS======= ");
    console.log("ALU Result: " + this.aluResult.value);
    console.log("Zero: " + this.zero.value);
  }
}

module.exports = ALU;
