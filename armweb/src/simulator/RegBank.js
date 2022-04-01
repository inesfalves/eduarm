const Component = require("./Component.js");

let registers = [];
class RegBank extends Component {
  constructor(id, json) {
    super(id, json);

    //Register Bank inputs
    this.readReg1 = super.addInput(json.input[0], 0);
    this.readReg2 = super.addInput(json.input[1], 0);
    this.writeReg = super.addInput(json.input[2], 0);
    this.writeData = super.addInput(json.input[3], 0);
    this.regWrite = super.addInput(json.input[4], 0);

    //Register Bank outputs
    this.readData1 = super.addOutput(json.output[0], 0);
    this.readData2 = super.addOutput(json.output[1], 0);

    //Initialize registers -> assuming 32 registers
    for (let i = 0; i < 32; i++) {
      registers[i] = 0;
    }
  }

  //allocating the register values
  execute(ctrl) {
    // li $5, 3
    // li $7, 8
    // add $4, $5, $7
    this.readReg1.value = 5;
    this.readReg2.value = 7;
    this.writeReg.value = 4;

    for (let i = 0; i < ctrl.outputValues.length; i++) {
      if (ctrl.outputValues[i].id === this.regWrite.id) {
        this.regWrite.value = ctrl.outputValues[i].value;
      }
    }
    registers[5] = 3;
    registers[7] = 8;

    this.readData1.value = registers[this.readReg1.value];
    this.readData2.value = registers[this.readReg2.value];
  }

  printValues() {
    console.log("\n");
    console.log("REGISTER BANK");

    console.log("Register Bank: " + registers);
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
