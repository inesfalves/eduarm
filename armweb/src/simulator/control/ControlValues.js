const json = require("../CPU.json");

const jsonFile = JSON.parse(JSON.stringify(json));

class ControlValues {
  constructor() {
    //Each opcode to the possible outputs
    this.opcodeValues = [];
  }

  initializeControl() {
    //Load JSON entries
    this.opcodeValues = jsonFile.controlUnit;
  }

  getControlOutputs(opcode) {
    if (this.opcodeValues[opcode] !== undefined) {
      return this.opcodeValues[opcode];
    } else {
      console.log("This is an R-type instruction");
      return this.opcodeValues["R"];
    }
  }
}

module.exports = ControlValues;
