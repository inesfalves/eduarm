const Component = require("./Component.js");
const Data = require("./Data.js");

class MUX extends Component {
  constructor(id, json) {
    super(id, json);

    //MUX input values
    this.zero = super.addInput(json.input[0], new Data(0, 0));
    this.one = super.addInput(json.input[1], new Data(0, 0));
    this.selector = super.addInput(json.input[2], new Data(0, 0));

    //MUX output values
    this.muxOut = super.addOutput(json.output, new Data(0, 0));

    super.latency = json.latency;
  }

  execute() {
    if (this.id === "MuxReg") {
      this.selector.value = this.selector.value.ALUSrc;
    }

    if (this.id === "PipelineMuxMem") {
      this.selector.value = this.selector.value.memToReg;
      this.muxOut.value = this.selector.value
        ? this.zero.value
        : this.one.value;
    } else {
      //"the selector is a single signal that selects one of the inputs if it is true (1) and the other if it is false (0)"
      this.muxOut.value = this.selector.value
        ? this.one.value
        : this.zero.value;
    }
  }

  printValues() {
    console.log("\n");
    console.log("MUX");

    console.log("=======INPUTS======= ");
    console.log("0: " + this.zero.value);
    console.log("1: " + this.one.value);
    console.log("S: " + this.selector.value);

    console.log("=======OUTPUTS======= ");
    console.log("MUX Output: " + this.muxOut.value);
    console.log("\n");
  }
}

module.exports = MUX;
