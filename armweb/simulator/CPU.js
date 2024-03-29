const modules = require("./modules.js");

const unicycleJson = require("./CPU.json");
const pipelineJson = require("./PipelineCPU.json");
const cpuJsonMap = {
  Unicycle: JSON.parse(JSON.stringify(unicycleJson)),
  Pipeline: JSON.parse(JSON.stringify(pipelineJson)),
};
const e = require("cors");

//Generic CPU configuration read from a JSON file
class CPU {
  constructor(id) {
    this.id = id;

    //List with all the components of the CPU
    this.cpuComponents = [];
    this.connections = [];
    this.cpuVersion = "Unicycle";
  }

  fromJSON(json) {
    this.cpuComponents = json.cpuComponents;
    this.connections = json.connections;
  }

  initializeCPU(registers, memory) {
    //Read JSON file
    let jsonFile = cpuJsonMap[this.cpuVersion];
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
      if (
        this.cpuComponents[i].id === "RegBank" ||
        this.cpuComponents[i].id === "PipelineRegBank"
      ) {
        for (let j = 0; j < registers.length; j++) {
          if (registers[j][1] === "") {
            registers[j][1] = "0";
          }
          this.cpuComponents[i].registers[registers[j][0]][1] = registers[j][1];
        }
      }
      if (
        this.cpuComponents[i].id === "DataMemory" ||
        this.cpuComponents[i].id === "PipelineDataMemory"
      ) {
        this.cpuComponents[i].memory = memory;
      }
    }
  }

  connectComponents() {
    //Read JSON file
    let jsonFile = cpuJsonMap[this.cpuVersion];
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

  executeCPU(instructionType) {
    for (let i = this.cpuComponents.length - 1; i >= 0; i--) {
      if (this.cpuComponents[i].isPipeline) {
        this.cpuComponents[i].executePipelineTransfer();
      }
    }

    for (let i = 0; i < this.cpuComponents.length; i++) {
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
      if (
        this.cpuComponents[i].id === "SignExtendDist" ||
        this.cpuComponents[i].id === "PipeSignExtendDist"
      ) {
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
    this.connections = [];
    return this.cpuComponents;
  }

  // recalculateComponentLatency(newLatency, componentID) {
  //   for (let i = 0; i < this.cpuComponents.length; i++) {
  //     if (this.cpuComponents[i].id === componentID) {
  //       this.cpuComponents[i].latency = parseInt(newLatency);
  //     }
  //     this.cpuComponents[i].calculateLatency();
  //   }
  //   return this.cpuComponents;
  // }

  returnCPURelevantLines(instructionType) {
    let relevantLines = [];
    let jsonFile = cpuJsonMap[this.cpuVersion];
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
    let jsonFile = cpuJsonMap[this.cpuVersion];
    let cpuConnections = jsonFile.cpuConnections;
    for (let j = 0; j < cpuConnections.length; j++) {
      for (let i = 0; i < this.connections.length; i++) {
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
