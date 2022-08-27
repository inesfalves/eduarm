const Component = require("./Component.js");
const Data = require("./Data.js");

class PipelineControlMux extends Component {
  constructor(id, json) {
    super(id, json);

    //MUX input values
    this.inputValues = [
      super.addInput(json.input[0], new Data(0, 0)),
      super.addInput(json.input[1], new Data(0, 0)),
      super.addInput(json.input[2], new Data(0, 0)),
      super.addInput(json.input[3], new Data(0, 0)),
      super.addInput(json.input[4], new Data(0, 0)),
      super.addInput(json.input[5], new Data(0, 0)),
      super.addInput(json.input[6], new Data(0, 0)),
      super.addInput(json.input[7], new Data(0, 0)),
      super.addInput(json.input[8], new Data(0, 0)),
      super.addInput(json.input[9], new Data(0, 0)),
    ];

    this.zero = super.addInput(json.input[10], new Data(0, 0));

    this.selector = super.addInput(json.input[11], new Data(0, 0));

    //MUX output values
    this.iDEXWB = super.addOutput(json.output[0], new Data(0, 0));
    this.iDEXM = super.addOutput(json.output[1], new Data(0, 0));
    this.iDEXEX = super.addOutput(json.output[2], new Data(0, 0));

    super.latency = json.latency;
  }

  execute() {
    let inputsCopy = this.inputValues.slice();

    if (this.selector.value === 1) {
      for (let i = 0; i < inputsCopy.length; i++) {
        inputsCopy[i] = this.zero;
      }
    }

    this.iDEXWB.value = {
      memToReg: inputsCopy[4].value,
      regWrite: inputsCopy[9].value,
    };

    this.iDEXM.value = {
      uncondBranch: inputsCopy[1].value,
      branch: inputsCopy[2].value,
      memRead: inputsCopy[3].value,
      memWrite: inputsCopy[7].value,
    };

    this.iDEXEX.value = {
      ALUOp0: inputsCopy[5].value,
      ALUOp1: inputsCopy[6].value,
      ALUSrc: inputsCopy[8].value,
    };
  }
}

module.exports = PipelineControlMux;
