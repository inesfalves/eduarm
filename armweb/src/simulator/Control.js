const Component = require("./Component.js");
const ControlValues = require("./control/ControlValues.js");

let controlValues = new ControlValues();
controlValues.initializeControl();

class Control extends Component {
  constructor(id, json) {
    super(id, json);

    //Control input values
    //Bits 31 to 21 or 31 to 24
    this.controlInput = super.addInput(json.input, 0);

    //Control output values
    this.outputValues = [
      super.addOutput(json.output[0], 0),
      super.addOutput(json.output[1], 0),
      super.addOutput(json.output[2], 0),
      super.addOutput(json.output[3], 0),
      super.addOutput(json.output[4], 0),
      super.addOutput(json.output[4], 0),
      super.addOutput(json.output[5], 0),
      super.addOutput(json.output[6], 0),
      super.addOutput(json.output[7], 0),
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
