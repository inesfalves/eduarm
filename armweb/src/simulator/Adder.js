const Component = require("./Component.js");

class Adder extends Component {
  constructor(id, json) {
    super(id, json);

    //Adder input values
    this.value1 = super.addInput(json.input[0], 0);
    this.value2 = super.addInput(json.input[1], 4);

    //Adder output value
    this.addedValue = super.addOutput(json.output, 0);
  }

  execute() {
    //Add the two given values
    this.addedValue.value = this.value1.value + this.value2.value;
  }

  printValues() {
    console.log("\n");
    console.log("ADDER");

    console.log("=======INPUTS======= ");
    console.log("Value 1: " + this.value1.value);
    console.log("Value 2: " + this.value2.value);

    console.log("=======OUTPUTS======= ");
    console.log("Result: " + this.addedValue.value);
  }
}

module.exports = Adder;
