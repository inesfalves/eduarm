const Component = require("./Component.js");
const ControlValues = require("./control/ControlValues.js");

let controlValues = new ControlValues();
controlValues.initializeControl();

class Control extends Component {
  constructor(id) {
    super(id);

    //Control input values
    //Bits 31 to 21 or 31 to 24
    this.controlInput = super().addInput("controlInput", 0);

    //Control output values
    this.outputValues = [
      super().addOutput("Reg2Loc", 0),
      super().addOutput("ALUSrc", 0),
      super().addOutput("MemtoReg", 0),
      super().addOutput("RegWrite", 0),
      super().addOutput("MemRead", 0),
      super().addOutput("MemWrite", 0),
      super().addOutput("Branch", 0),
      super().addOutput("ALUOp1", 0),
      super().addOutput("ALUOp0", 0),
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
