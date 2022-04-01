const Component = require("./Component.js");

class DataMemory extends Component {
  constructor(id, json) {
    super(id, json);

    //Data memory inputs
    this.address = super.addInput(json.input[0], 0);
    this.writeData = super.addInput(json.input[1], 0);
    this.memRead = super.addInput(json.input[2], 0);
    this.memWrite = super.addInput(json.input[3], 0);

    //Data memory output
    this.readData = super.addOutput(json.output, 0);
  }

  execute() {}

  printValues() {}
}

module.exports = DataMemory;
