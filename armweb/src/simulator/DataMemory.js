const Component = require("./Component.js");

class DataMemory extends Component {
  constructor(id, json) {
    super(id, json);

    //Data memory inputs
    this.address = super.addInput(json.input[0], 0);
    this.writeData = super.addInput(json.input[1], 0);
    this.memRead = super.addInput(json.input[2], 0);
    this.memWrite = super.addInput(json.input[3], 0);

    //Data memory output
    this.readData = super.addOutput(json.output, 0);
  }

  execute() {
    //TO DO
  }

  printValues() {
    console.log("\n");
    console.log("DATA MEMORY");

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
