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

  printValues() {
    console.log("\n");
    console.log("SIGN EXTEND");

    console.log("=======INPUTS======= ");
    console.log(
      "Value to extend: " + (this.signExtendIn.value >>> 0).toString(2)
    );

    console.log("=======OUTPUTS======= ");
    console.log(
      "Result: " + (this.signExtendOut.value.value >>> 0).toString(2)
    );
  }
}

module.exports = SignExtend;
