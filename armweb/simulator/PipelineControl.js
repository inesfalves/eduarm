const Component = require("./Component.js");
const Data = require("./Data.js");

class PipelineControl extends Component {
  constructor(id, json) {
    super(id, json);

    this.output = [];

    //PipelineControl Inputs
    this.input = super.addInput(json.input, new Data(0, 0));

    //PipelineControl Outputs
    for (let i = 0; i < json.output.length; i++) {
      this.output[i] = super.addOutput(json.output[i], new Data(0, 0));
    }
  }

  execute() {
    for (let i = 0; i < this.output.length; i++) {
      this.output[i].value = this.input.value;
    }
  }
}

module.exports = PipelineControl;
