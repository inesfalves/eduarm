const Component = require("./Component.js");

class Distributor extends Component {
  constructor(id, json) {
    super(id, json);

    //Distributor input
    this.input = super.addInput(json.input, 0);
    this.output = [];
    this.from = [];
    this.to = [];

    //Distributor output
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i].id, 0);
      this.from[i] = json.output[i].from;
      this.to[i] = json.output[i].to;
    }
  }

  execute() {
    //Change this in the future
    for (let i = 0; i < this.output.length; i++) {
      this.output[i].value = this.bitMasking(
        this.input.value,
        this.createMask(this.from[i], this.to[i]),
        this.to[i]
      );
    }
  }

  createMask(from, to) {
    //Assuming 32 bits
    return (-1 >>> (32 - (from - to))) << to;
  }

  bitMasking(value, mask, to) {
    return (value & mask) >>> to;
  }

  printValues() {
    //01000011000000000000000110001011
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
