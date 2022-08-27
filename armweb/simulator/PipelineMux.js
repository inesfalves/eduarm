const Component = require("./Component.js");
const Data = require("./Data.js");

class PipelineMux extends Component {
  constructor(id, json) {
    super(id, json);

    //MUX input values
    this.value1 = super.addInput(json.input[0], new Data(0, 0));
    this.value2 = super.addInput(json.input[1], new Data(0, 0));
    this.value3 = super.addInput(json.input[2], new Data(0, 0));
    this.selector = super.addInput(json.input[3], new Data(0, 0));

    //MUX output values
    this.muxOut = super.addOutput(json.output, new Data(0, 0));

    super.latency = json.latency;
  }

  execute() {
    switch (this.selector.value) {
      case "00":
        this.muxOut.value = this.value1.value;
        break;
      case "01":
        this.muxOut.value = this.value2.value;
        break;
      case "10":
        this.muxOut.value = this.value3.value;
        break;
    }
  }
}

module.exports = PipelineMux;
