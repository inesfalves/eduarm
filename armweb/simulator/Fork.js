const Component = require("./Component.js");
const Data = require("./Data.js");

class Fork extends Component {
  constructor(id, json) {
    super(id, json);

    //Fork input
    this.input = super.addInput(json.input, new Data(0, 0));
    this.output = [];

    //Fork output
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i], new Data(0, 0));
    }

    super.latency = json.latency;
  }

  execute() {
    for (let i = 0; i < this.output.length; i++) {
      this.output[i].value = this.input.value;
    }
  }

  printValues() {
    console.log("\n");
    console.log("=== FORK ===");
    console.log("input id: " + this.input.id + "  value: " + this.input.value);
    for (let i = 0; i < this.output.length; i++) {
      console.log(
        "output id: " +
          this.output[i].id +
          "  value: " +
          (this.output[i].value >>> 0).toString(2)
      );
    }
  }
}

module.exports = Fork;
