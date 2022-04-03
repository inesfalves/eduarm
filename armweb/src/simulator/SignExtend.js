const Component = require("./Component.js");
const Data = require("./Data.js");

class SignExtend extends Component {
  constructor(id, json) {
    super(id, json);

    //SignExtend input value
    this.signExtendIn = super.addInput(json.input, new Data(0, 0));

    //SignExtend output value
    this.signExtendOut = super.addOutput(json.output, new Data(0, 0));
  }

  execute() {
    this.signExtendOut.data = this.signExtendIn.data.getExtendedValue(64);
  }

  printValues() {
    console.log("\n");
    console.log("SIGN EXTEND");

    console.log("=======INPUTS======= ");
    console.log(
      "Value to extend: " + (this.signExtendIn.value >>> 0).toString(2)
    );

    console.log("=======OUTPUTS======= ");
    console.log("Result: " + this.signExtendOut.data.value);
  }
}

module.exports = SignExtend;
