const Component = require("./Component.js");

class Adder extends Component {
  constructor(id) {
    super(id);

    //Adder input values
    this.value1 = super().addInput("addValue1", 0);
    this.value2 = super().addInput("addValue2", 0);

    //Adder output value
    this.addedValue = super().addOutput("addedValue", 0);
  }

  execute() {
    //Add the two given values
    this.addedValue.value = this.value1.value + this.value2.value;
  }

  printValues() {}
}

module.exports = Adder;
