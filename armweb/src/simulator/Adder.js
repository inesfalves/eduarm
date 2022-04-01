const Component = require("./Component.js");

class Adder extends Component {
  constructor(id, json) {
    super(id, json);

    //Adder input values
    this.value1 = super.addInput(json.input[0], 0);
    this.value2 = super.addInput(json.input[1], 0);

    //Adder output value
    this.addedValue = super.addOutput(json.output, 0);
  }

  execute() {
    //Add the two given values
    this.addedValue.value = this.value1.value + this.value2.value;
  }

  printValues() {}
}

module.exports = Adder;
