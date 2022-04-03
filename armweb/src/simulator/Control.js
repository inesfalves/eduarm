const Component = require("./Component.js");
const ControlValues = require("./control/ControlValues.js");
const Data = require("./Data.js");

let controlValues = new ControlValues();
controlValues.initializeControl();

class Control extends Component {
  constructor(id, json) {
    super(id, json);

    //Control input values
    //Bits 31 to 21 or 31 to 24
    this.controlInput = super.addInput(json.input, new Data(0, 0));

    //Control output values
    this.outputValues = [
      super.addOutput(json.output[0], new Data(0, 0)),
      super.addOutput(json.output[1], new Data(0, 0)),
      super.addOutput(json.output[2], new Data(0, 0)),
      super.addOutput(json.output[3], new Data(0, 0)),
      super.addOutput(json.output[4], new Data(0, 0)),
      super.addOutput(json.output[5], new Data(0, 0)),
      super.addOutput(json.output[6], new Data(0, 0)),
      super.addOutput(json.output[7], new Data(0, 0)),
      super.addOutput(json.output[8], new Data(0, 0)),
    ];
  }

  execute() {
    let jsonOutputValues = controlValues.getControlOutputs(
      this.controlInput.value
    );

    for (let i = 0; i < this.outputValues.length; i++) {
      this.outputValues[i].value = jsonOutputValues[this.outputValues[i].id];
    }
  }

  printValues() {
    console.log("\n");
    console.log("CONTROL UNIT");

    console.log("=======INPUTS======= ");
    console.log("Input 1: " + this.controlInput.value);

    console.log("=======OUTPUTS======= ");
    for (let i = 0; i < this.outputValues.length; i++) {
      console.log(this.outputValues[i].id + ": " + this.outputValues[i].value);
    }
  }
}

module.exports = Control;
