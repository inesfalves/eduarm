const Component = require("./Component.js");
const Data = require("./Data.js");

class ForwardingUnit extends Component {
  constructor(id, json) {
    super(id, json);

    //Forwarding Unit inputs
    this.IDEXRn = super.addInput(json.input[0], new Data(0, 0));
    this.IDEXRm = super.addInput(json.input[1], new Data(0, 0));
    this.EXMEMRd = super.addInput(json.input[2], new Data(0, 0));
    this.EXMEMControl = super.addInput(json.input[3], new Data(0, 0));
    this.MEMWBRd = super.addInput(json.input[4], new Data(0, 0));
    this.MEMWBControl = super.addInput(json.input[5], new Data(0, 0));

    //Forwarding Unit outputs
    this.ForwardA = super.addOutput(json.output[0], new Data(0, 0));
    this.ForwardB = super.addOutput(json.output[1], new Data(0, 0));
  }

  execute() {
    this.EXMEMControl.value = this.EXMEMControl.value.regWrite;
    this.MEMWBControl.value = this.MEMWBControl.value.memToReg;

    if (
      this.EXMEMControl.value === 1 &&
      this.EXMEMRd.value !== 31 &&
      this.EXMEMRd.value === this.IDEXRn.value
    ) {
      this.ForwardA.value = "10";
    } else if (
      this.MEMWBControl.value === 1 &&
      this.MEMWBRd.value !== 31 &&
      this.MEMWBRd.value === this.IDEXRn.value
    ) {
      this.ForwardA.value = "01";
    } else {
      this.ForwardA.value = "00";
    }

    if (
      this.EXMEMControl.value === 1 &&
      this.EXMEMRd.value !== 31 &&
      this.EXMEMRd.value === this.IDEXRm.value
    ) {
      this.ForwardB.value = "10";
    } else if (
      this.MEMWBControl.value === 1 &&
      this.MEMWBRd.value !== 31 &&
      this.MEMWBRd.value === this.IDEXRm.value
    ) {
      this.ForwardB.value = "01";
    } else {
      this.ForwardB.value = "00";
    }
  }
}

module.exports = ForwardingUnit;
