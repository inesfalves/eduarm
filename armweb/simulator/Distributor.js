const Component = require("./Component.js");
const Data = require("./Data.js");

class Distributor extends Component {
  constructor(id, json) {
    super(id, json);

    //Distributor input
    this.input = super.addInput(json.input, new Data(0, 0));
    this.output = [];
    this.from = [];
    this.to = [];

    //Distributor output
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i].id, new Data(0, 0));
      this.from[i] = json.output[i].from;
      this.to[i] = json.output[i].to;
    }

    super.latency = json.latency;
  }

  loadInstructionType(insType) {
    switch (insType) {
      case "loadType":
      case "storeType":
        this.from[0] = 20;
        this.to[0] = 12;
        break;
      case "cBranchType":
        this.from[0] = 23;
        this.to[0] = 5;
        break;
      case "uncondBranchType":
        this.from[0] = 25;
        this.to[0] = 0;
        break;
    }
  }

  execute() {
    for (let i = 0; i < this.output.length; i++) {
      this.output[i].value = this.bitMasking(
        this.input.value,
        this.createMask(this.from[i], this.to[i]),
        this.to[i]
      );
      this.output[i].data.size = this.from[i] - this.to[i] + 1;
    }
  }

  createMask(from, to) {
    //Assuming 32 bits
    return (-1 >>> (32 - (from - to + 1))) << to;
  }

  bitMasking(value, mask, to) {
    return (value & mask) >>> to;
  }

  printValues() {
    console.log("\n");
    console.log("=== DISTRIBUTOR ===");
    for (let i = 0; i < this.output.length; i++) {
      console.log(
        "id: " +
          this.output[i].id +
          "  value: " +
          (this.output[i].value >>> 0).toString(2)
      );
    }
  }
}

module.exports = Distributor;
