const json = require("../Control.json");

const jsonFile = JSON.parse(JSON.stringify(json));

class ALUControlValues {
  constructor() {
    this.aluControlValues = [];
  }

  initializeALUControl() {
    //Load JSON entries
    this.aluControlValues = jsonFile.ALUcontrol.control;
  }

  //aluOp0, aluOp1, opcode
  getALUControlValues(aluOp0, aluOp1, opcode) {
    for (let i = 0; i < this.aluControlValues.length; i++) {
      if (
        this.aluControlValues[i].ALUOp0 === aluOp0 &&
        this.aluControlValues[i].ALUOp1 === aluOp1
      ) {
        if (this.aluControlValues[i].opcode !== undefined) {
          if (this.aluControlValues[i].opcode === opcode) {
            return this.aluControlValues[i].CtrlALU;
          }
        } else {
          return this.aluControlValues[i].CtrlALU;
        }
      }
    }
  }
}

module.exports = ALUControlValues;
