const Component = require("./Component.js");
const Data = require("./Data.js");

class PipelineRegister extends Component {
  constructor(id, json) {
    super(id, json);

    this.input = [];
    this.output = [];

    this.isPipeline = true;

    //Inputs
    for (let i = 0; i < json.input.length; i++) {
      this.input[i] = super.addInput(json.input[i], new Data(0, 0));
    }

    //Outputs
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i], new Data(0, 0));
    }
  }

  execute() {
    // Do nothing!
  }

  executePipelineTransfer() {
    if (this.id === "IFID") {
      if (this.input[2].value === 1) {
        return;
      }
    }
    for (let i = 0; i < this.output.length; i++) {
      this.output[i].value = this.input[i].value;
    }
  }
}

module.exports = PipelineRegister;
