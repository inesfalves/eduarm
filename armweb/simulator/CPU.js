const modules = require("./modules.js");

const json = require("./CPU.json");
const e = require("cors");

const jsonFile = JSON.parse(JSON.stringify(json));

//Generic CPU configuration read from a JSON file
class CPU {
  constructor(id) {
    this.id = id;

    //List with all the components of the CPU
    this.cpuComponents = [];
    this.connections = [];
  }

  initializeCPU(registers, memory) {
    //Read JSON file
    let jsonComponents = Object.entries(jsonFile.cpuComponents);
    let componentClasses = Object.values(modules);
    let componentType,
      component = null;

    for (let i = 0; i < jsonComponents.length; i++) {
      componentType = jsonComponents[i][1].componentType;

      //Find corresponding class
      for (let j = 0; j < componentClasses.length; j++) {
        if (componentType === componentClasses[j].name) {
          //Initialize component
          component = new modules[Object.keys(modules)[j]](
            jsonComponents[i][0],
            jsonComponents[i][1]
          );

          //Add components to component array
          this.cpuComponents.push(component);
        }
      }
    }

    this.connectComponents();

    for (let i = 0; i < this.cpuComponents.length; i++) {
      if (this.cpuComponents[i].id === "RegBank") {
        for (let j = 0; j < registers.length; j++) {
          if (registers[j][1] === "") {
            registers[j][1] = "0";
          }
          this.cpuComponents[i].registers[registers[j][0]][1] = registers[j][1];
        }
      }
      if (this.cpuComponents[i].id === "DataMemory") {
        this.cpuComponents[i].memory = memory;
      }
    }
  }

  connectComponents() {
    //Read JSON file
    let cpuConnections = jsonFile.cpuConnections;
    let originComponent,
      destComponent,
      output,
      input = null;

    for (let i = 0; i < cpuConnections.length; i++) {
      originComponent = this.cpuComponents.find(
        (e) => e.id === cpuConnections[i].origin
      );
      destComponent = this.cpuComponents.find(
        (e) => e.id === cpuConnections[i].dest
      );

      output = originComponent.outputs[cpuConnections[i].output];
      input = destComponent.inputs[cpuConnections[i].input];

      output.createConnection(input);
      this.connections.push([output, input]);
    }
  }

  setInsMemInstructions(instructions) {
    for (let i = 0; i < this.cpuComponents.length; i++) {
      if (this.cpuComponents[i].id === "InsMem") {
        this.cpuComponents[i].assembledInstructions = instructions;
      }
    }
  }

  executeCPU(instruction, instructionType) {
    for (let i = 0; i < this.cpuComponents.length; i++) {
      // if (this.cpuComponents[i].id === "InsMem") {
      //   this.cpuComponents[i].assembledInstructions.push(instruction);
      // }
      if (this.cpuComponents[i].id === "InsDistributor") {
        if (instructionType === "cBranchType") {
          this.cpuComponents[i].from[0] = 31;
          this.cpuComponents[i].to[0] = 24;
        } else if (instructionType === "uncondBranchType") {
          this.cpuComponents[i].from[0] = 31;
          this.cpuComponents[i].to[0] = 26;
        } else {
          this.cpuComponents[i].from[0] = 31;
          this.cpuComponents[i].to[0] = 21;
        }
      }
      if (this.cpuComponents[i].id === "SignExtendDist") {
        this.cpuComponents[i].loadInstructionType(instructionType);
      }

      this.cpuComponents[i].execute();
    }

    for (let i = 0; i < this.cpuComponents.length; i++) {
      if (this.cpuComponents[i].isSynchronous) {
        this.cpuComponents[i].executeClockTransition();
      }
    }

    for (let i = 0; i < this.cpuComponents.length; i++) {
      this.cpuComponents[i].calculateLatency();
    }

    return this.cpuComponents;
  }

  returnCPU() {
    return this.cpuComponents;
  }

  resetCPU() {
    this.cpuComponents = [];
    return this.cpuComponents;
  }

  recalculateComponentLatency(newLatency, componentID) {
    for (let i = 0; i < this.cpuComponents.length; i++) {
      if (this.cpuComponents[i].id === componentID) {
        this.cpuComponents[i].latency = parseInt(newLatency);
      }
      this.cpuComponents[i].calculateLatency();
    }
    return this.cpuComponents;
  }

  returnCPURelevantLines(instructionType) {
    let relevantLines = [];
    let cpuConnections = jsonFile.cpuConnections;

    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < cpuConnections.length; j++) {
        if (
          this.connections[i][1].id === cpuConnections[j].input &&
          this.connections[i][0].id === cpuConnections[j].output
        ) {
          if (cpuConnections[j][instructionType] === "true") {
            relevantLines.push(this.connections[i]);
          }
        }
      }
    }

    return relevantLines;
  }

  returnCriticalPath(instructionType) {
    let criticalPath = [];
    let cpuConnections = jsonFile.cpuConnections;
    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < cpuConnections.length; j++) {
        if (
          this.connections[i][1].id === cpuConnections[j].input &&
          this.connections[i][0].id === cpuConnections[j].output
        ) {
          if (cpuConnections[j][instructionType + "CP"] !== undefined) {
            if (cpuConnections[j][instructionType + "CP"] === "true") {
              criticalPath.push(this.connections[i]);
            }
          }
        }
      }
    }
    return criticalPath;
  }
}

module.exports = CPU;
