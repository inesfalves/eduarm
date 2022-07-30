const Component = require("./Component.js");
const Data = require("./Data.js");

class SignExtend extends Component {
  constructor(id, json) {
    super(id, json);

    //SignExtend input value
    this.signExtendIn = super.addInput(json.input, new Data(0, 0));

    //SignExtend output value
    this.signExtendOut = super.addOutput(json.output, new Data(0, 0));

    super.latency = json.latency;
  }

  parse(num, length = num.length) {
    if (num[num.length - length] !== "1") return +("0b" + num);
    let inverse = "";
    for (const digit of num.slice(-length)) inverse += +!+digit;
    return -("0b" + inverse) - 1;
  }

  execute() {
    this.signExtendIn.value = this.parse(
      this.signExtendIn.value.toString(2),
      this.signExtendIn.data.size
    );

    this.signExtendOut.value = this.parse(
      this.signExtendIn.data.getExtendedValue(64).value.toString(2),
      64
    );
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
