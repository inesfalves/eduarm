const Component = require("./Component.js");

class SignExtend extends Component {
  constructor(id) {
    super(id);

    //SignExtend input value
    this.signExtendIn = super().addInput("signExtendIn", 0);

    //SignExtend output value
    this.signExtendOut = super().addOutput("signExtendOut", 0);
  }

  execute() {
    //sign extend
  }

  printValues() {}
}

module.exports = SignExtend;
