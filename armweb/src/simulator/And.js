const Component = require("./Component.js");

class And extends Component {
  constructor(id, json) {
    super(id, json);

    //And input values
    this.value1 = super.addInput(json.input[0], 0);
    this.value2 = super.addInput(json.input[1], 0);

    //And output value
    this.result = super.addOutput(json.output, 0);
  }

  execute() {
    this.result.value = this.value1.value && this.value2.value;
  }

  printValues() {
    console.log("\n");
    console.log("AND");

    console.log("=======INPUTS======= ");
    console.log("Value 1: " + this.value1.value);
    console.log("Value 2: " + this.value2.value);

    console.log("=======OUTPUTS======= ");
    console.log("Result: " + this.result.value);
  }
}

module.exports = And;
