const Component = require("./Component.js");

class Distributor extends Component {
  constructor(id, json) {
    super(id, json);

    //Distributor input
    this.input = super.addInput(json.input, 0);
    this.output = [];

    //Distributor output
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i], 0);
    }
  }

  execute() {
    //Change this in the future
    for (let i = 0; i < this.ouput.length; i++) {
      this.output[i].value = this.input.value;
    }
  }

  printValues() {}
}

module.exports = Distributor;
