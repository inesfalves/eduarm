const Component = require("./Component.js");

class InstructionMemory extends Component {
  constructor(id, json) {
    super(id, json);

    //Instruction memory input values
    //instruction address from the program counter
    this.address = super.addInput(json.input, 0);

    //Instruction memory output values
    //Instruction in machine code
    this.instruction = super.addOutput(json.output, "10952736");

    //Array with the assembled instructions
    this.assembledInstructions = ["10952736"];
  }

  execute() {
    //Fetch the instruction using the PC value
    let instructionPos = this.address.value / 4;

    this.instruction.value = this.assembledInstructions[instructionPos];
  }

  printValues() {
    console.log("\n");
    console.log("INSTRUCTION MEMORY");

    console.log("=======INPUTS======= ");
    console.log("Address: " + this.address.value);

    console.log("=======OUTPUTS======= ");
    console.log("Instruction: " + this.instruction.value);
  }
}

module.exports = InstructionMemory;
