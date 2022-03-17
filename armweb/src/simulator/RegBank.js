const Component = require("./Component.js");

let component = new Component(0);

let registers = [];
class RegBank {
  constructor(id) {
    this.id = id;

    //Register Bank inputs
    this.readReg1 = component.addInput("reg1", 0);
    this.readReg2 = component.addInput("reg2", 0);
    this.writeReg = component.addInput("wReg", 0);
    this.writeData = component.addInput("wData", 0);
    this.regWrite = component.addInput("regW", 0);

    //Register Bank outputs
    this.readData1 = component.addOutput("rData1", 0);
    this.readData2 = component.addOutput("rData2", 0);

    //Initialize registers -> assuming 32 registers
    for (let i = 0; i < 32; i++) {
      registers[i] = 0;
    }
  }

  //allocating the register values
  execute() {
    // li $5, 3
    // li $7, 8
    // add $4, $5, $7
    this.readReg1.value = 5;
    this.readReg2.value = 7;

    registers[5] = 3;
    registers[7] = 8;

    this.readData1.value = registers[this.readReg1.value];
    this.readData2.value = registers[this.readReg2.value];
  }

  printValues() {
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
