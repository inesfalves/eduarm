const Component = require("./Component.js");

class MUX extends Component {
  constructor(id) {
    super(id);

    //MUX input values
    this.zero = super().addInput("mux0", 0);
    this.one = super().addInput("mux1", 0);
    this.selector = super().addInput("muxS", 0);

    //MUX output values
    this.muxOut = super().addOutput("muxOut", 0);
  }

  execute(regbank, alu) {
    //Input
    this.zero.value = alu.aluResult.value;
    //Should be, in this case, the data memory value
    this.one.value = 0;

    //Output
    //"the selector is a single signal that selects one of the inputs if it is true (1) and the other if it is false (0)"
    this.muxOut.value = this.selector.value ? this.one.value : this.zero.value;

    regbank.writeData.value = this.muxOut.value;
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
