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
    //00000000 10100111 00100000 00100000
    //31-21: 00000000 101
    //9-5: 00 001
    //20-16: 00111
    //4-0: 0000
    //31-0: 00000000 10100111 00100000 00100000
    console.log("=== DISTRIBUTOR ===");
    for (let i = 0; i < this.output.length; i++) {
      console.log(
        "id: " + this.output[i].id + " value: " + this.output[i].value
      );
    }
  }
}

module.exports = Distributor;
