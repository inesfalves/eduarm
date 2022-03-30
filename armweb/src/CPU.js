const Component = require("./Component.js");
const {
  Adder,
  ALU,
  ALUControl,
  Control,
  InstructionMemory,
  MUX,
  ProgramCounter,
  RegBank,
  ShiftLeft,
  SignExtend,
} = require("./simulator/*");

//Generic CPU configuration read from a JSON file
class CPU {
  constructor(id) {
    this.id = id;

    //List with all the components of the CPU
    this.cpuComponents = [];
  }

  initializeCPU() {
    //Read JSON file
  }
}

module.exports = Component;
