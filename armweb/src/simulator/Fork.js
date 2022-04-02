const Component = require("./Component.js");

class Fork extends Component {
  constructor(id, json) {
    super(id, json);

    //Fork input
    this.input = super.addInput(json.input, 0);

    //Fork output
    this.output = super.addOutput(json.output, 0);
  }

  execute() {
    this.output.value = this.input.value;
  }

  printValues() {}
}

module.exports = Fork;