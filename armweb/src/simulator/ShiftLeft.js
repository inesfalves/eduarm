const Component = require("./Component.js");

class ShiftLeft extends Component {
  constructor(id) {
    super(id);

    //ShiftLeft input value
    this.shiftInput = super().addInput("shiftInput", 0);

    //Amount to shift - should be provided in the JSON file
    this.amount = 2;

    //ShiftLeft output value
    this.shiftOutput = super().addOutput("shiftOutput", 0);
  }

  execute() {
    this.shiftOutput.value = this.shiftInput.value << this.amount;
  }

  printValues() {}
}

module.exports = ShiftLeft;
