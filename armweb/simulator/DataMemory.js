const Component = require("./Component.js");
const Data = require("./Data.js");

class DataMemory extends Component {
  constructor(id, json) {
    super(id, json);

    super.isSynchronous = true;

    //Data memory inputs
    this.address = super.addInput(json.input[0], new Data(0, 0));
    this.writeData = super.addInput(json.input[1], new Data(0, 0));
    this.memRead = super.addInput(json.input[2], new Data(0, 0));
    this.memWrite = super.addInput(json.input[3], new Data(0, 0));

    //Data memory output
    this.readData = super.addOutput(json.output, new Data(0, 0));
  }

  execute() {
    if (this.memRead.value === 1) {
      //Reading from memory
      this.readData.value = this.memory[this.address.value / 4];
    }
  }

  executeClockTransition() {
    if (this.memWrite.value === 1) {
      //Writing on memory
      this.memory[this.address.value / 4] = this.writeData.value;
    }
  }

  printValues() {
    console.log("\n");
    console.log("DATA MEMORY");

    console.log("Memory: " + this.memory);
    console.log("=======INPUTS======= ");
    console.log("Address: " + this.address.value);
    console.log("writeData: " + this.writeData.value);
    console.log("memRead: " + this.memRead.value);
    console.log("memWrite: " + this.memWrite.value);

    console.log("=======OUTPUTS======= ");
    console.log("readData: " + this.readData.value);
  }
}

module.exports = DataMemory;
