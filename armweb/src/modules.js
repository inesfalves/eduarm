module.exports = {
  adder: require("./simulator/Adder"),
  alu: require("./simulator/ALU"),
  aluctrl: require("./simulator/ALUControl"),
  ctrl: require("./simulator/Control"),
  inmem: require("./simulator/InstructionMemory"),
  mux: require("./simulator/MUX"),
  pc: require("./simulator/ProgramCounter"),
  regbank: require("./simulator/RegBank"),
  shiftleft: require("./simulator/ShiftLeft"),
  signextend: require("./simulator/SignExtend"),
  datamem: require("./simulator/DataMemory"),
};
