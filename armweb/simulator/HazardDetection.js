const Component = require("./Component.js");
const Data = require("./Data.js");

class HazardDetection extends Component {
  constructor(id, json) {
    super(id, json);

    //Hazard Detection inputs
    this.IFIDRn = super.addInput(json.input[0], new Data(0, 0));
    this.IFIDRm = super.addInput(json.input[1], new Data(0, 0));
    this.IDEXRd = super.addInput(json.input[2], new Data(0, 0));
    this.IDEXMemRead = super.addInput(json.input[3], new Data(0, 0));

    //hazard Detection outputs
    this.PCWrite = super.addOutput(json.output[0], new Data(0, 0));
    this.IFIDWrite = super.addOutput(json.output[1], new Data(0, 0));
    this.controlMuxSel = super.addOutput(json.output[2], new Data(0, 0));
  }

  execute() {
    this.IDEXMemRead.value = this.IDEXMemRead.value.memRead;
    if (
      this.IDEXMemRead.value == 1 &&
      (this.IDEXRd.value == this.IFIDRn.value ||
        this.IDEXRd.value == this.IFIDRm.value)
    ) {
      this.controlMuxSel.value = 1;
    } else {
      this.controlMuxSel.value = 0;
    }
  }
}

module.exports = HazardDetection;
