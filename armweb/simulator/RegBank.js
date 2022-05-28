const Component = require("./Component.js");
const Data = require("./Data.js");

let registers = [];
class RegBank extends Component {
  constructor(id, json) {
    super(id, json);

    super.isSynchronous = true;

    //Register Bank inputs
    this.readReg1 = super.addInput(json.input[0], new Data(0, 0));
    this.readReg2 = super.addInput(json.input[1], new Data(0, 0));
    this.writeReg = super.addInput(json.input[2], new Data(0, 0));
    this.writeData = super.addInput(json.input[3], new Data(0, 0));
    this.regWrite = super.addInput(json.input[4], new Data(0, 0));

    //Register Bank outputs
    this.readData1 = super.addOutput(json.output[0], new Data(0, 0));
    this.readData2 = super.addOutput(json.output[1], new Data(0, 0));

    this.registers = [];
    for (let i = 0; i < 32; i++) {
      let register = [i, "0"];
      this.registers.push(register);
    }
  }

  //allocating the register values
  execute() {
    let possValue1 = this.registers.find(
      (element) => element[0] === this.readReg1.value
    );
    let possValue2 = this.registers.find(
      (element) => element[0] === this.readReg2.value
    );
    if (possValue1 !== undefined) {
      this.readData1.value = parseInt(possValue1[1]);
    } else {
      this.readData1.value = 0;
    }
    if (possValue2 !== undefined) {
      this.readData2.value = parseInt(possValue2[1]);
    } else {
      this.readData2.value = 0;
    }
  }

  executeClockTransition() {
    console.log(this.writeData.value);
    //Write the result of the operation on the intended register
    if (this.regWrite.value === 1) {
      this.registers[this.writeReg.value][1] = this.writeData.value;
    }
    console.log(this.registers);
  }

  printValues() {
    console.log("\n");
    console.log("REGISTER BANK");

    console.log("=======INPUTS======= ");
    console.log("Read Register 1: " + this.readReg1.value);
    console.log("Read Register 2: " + this.readReg2.value);
    console.log("Write Register: " + this.writeReg.value);
    console.log("Write Data: " + this.writeData.value);
    console.log("RegWrite: " + this.regWrite.value);

    console.log("=======OUTPUTS======= ");
    console.log("Read Data 1: " + this.readData1.value);
    console.log("Read Data 2: " + this.readData2.value);
  }
}

module.exports = RegBank;
