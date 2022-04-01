const Component = require("./Component.js");

class SignExtend extends Component {
  constructor(id, json) {
    super(id, json);

    //SignExtend input value
    this.signExtendIn = super.addInput(json.input, 0);

    //SignExtend output value
    this.signExtendOut = super.addOutput(json.output, 0);
  }

  execute() {
    //sign extend
  }

  printValues() {}
}

module.exports = SignExtend;
