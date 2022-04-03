const Component = require("./Component.js");
const Data = require("./Data.js");

class Fork extends Component {
  constructor(id, json) {
    super(id, json);

    //Fork input
    this.input = super.addInput(json.input, new Data(0, 0));

    //Fork output
    this.output = super.addOutput(json.output, new Data(0, 0));
  }

  execute() {
    this.output.value = this.input.value;
  }

  printValues() {}
}

module.exports = Fork;
