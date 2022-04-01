const Component = require("./Component.js");

class InstructionMemory extends Component {
  constructor(id, json) {
    super(id, json);

    //Instruction memory input values
    //instruction address from the program counter
    this.address = super.addInput(json.input, 0);

    //Instruction memory output values
    //Instruction in machine code
    this.instruction = super.addOutput(json.output, 0);

    //Array with the assembled instructions
    this.assembledInstructions = [];
  }

  execute() {
    //Fetch the instruction using the PC value
    let instructionPos = this.address.value / 4;
    this.instruction = this.assembledInstructions[instructionPos];
  }

  printValues() {}
}

module.exports = InstructionMemory;
