const Component = require("./Component.js");

class ShiftLeft extends Component {
  constructor(id, json) {
    super(id, json);

    //ShiftLeft input value
    this.shiftInput = super.addInput(json.input, 0);

    //Amount to shift
    this.amount = json.amount;

    //ShiftLeft output value
    this.shiftOutput = super.addOutput(json.output, 0);
  }

  execute() {
    this.shiftOutput.value = this.shiftInput.value << this.amount;
  }

  printValues() {
    console.log("\n");
    console.log("SHIFT LEFT");

    console.log("=======INPUTS======= ");
    console.log("Value to shift: " + this.shiftInput.value);

    console.log("=======OUTPUTS======= ");
    console.log("Shift: " + this.shiftOutput.value);
  }
}

module.exports = ShiftLeft;
