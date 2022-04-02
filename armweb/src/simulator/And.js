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

  printValues() {}
}

module.exports = And;
