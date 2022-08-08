const CPU = require("./CPU.js");

class UserSession {
  constructor() {
    this.cpu = new CPU("basicCPU");

    this.cpuStates = [];
    this.instructionGroup = [];
    this.instructionCode = "";
    this.registers = [];
    this.memory = new Array(15).fill(0);
    this.instructionTypeGroup = [];
    this.relevantLines = [];
    this.criticalPath = [];
  }

  fromJSON(json) {
    this.cpu.fromJSON(json.cpu);

    this.cpuStates = json.cpuStates;
    this.instructionGroup = json.instructionGroup;
    this.instructionCode = json.instructionCode;
    this.registers = json.registers;
    this.memory = json.memory;
    this.instructionTypeGroup = json.instructionTypeGroup;
    this.relevantLines = json.relevantLines;
    this.criticalPath = json.criticalPath;
  }

  reset() {
    this.cpu.resetCPU();
    this.cpuStates = [];
    this.instructionGroup = [];
    this.instructionCode = "";
    this.registers = [];
    this.memory = new Array(15).fill(0);
    this.instructionTypeGroup = [];
    this.relevantLines = [];
    this.criticalPath = [];
  }
}

module.exports = UserSession;
