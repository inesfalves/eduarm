const modules = require("./modules.js");

const json = require("./CPU.json");

const jsonFile = JSON.parse(JSON.stringify(json));

//Generic CPU configuration read from a JSON file
class CPU {
  constructor(id) {
    this.id = id;

    //List with all the components of the CPU
    this.cpuComponents = [];
  }

  initializeCPU() {
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

          //Execute once to initialize the values and add components to component array
          //component.execute();
          this.cpuComponents.push(component);
        }
      }
    }

    this.connectComponents();
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
    }
  }

  executeCPU() {
    for (let i = 0; i < this.cpuComponents.length; i++) {
      if (this.cpuComponents[i].isSynchronous) {
        this.cpuComponents[i].executeClockTransition();
      }
      this.cpuComponents[i].execute();
    }

    for (let i = 0; i < this.cpuComponents.length; i++) {
      this.cpuComponents[i].printValues();
    }
  }

  returnComponentByID(id) {
    return this.cpuComponents.find((x) => x.id === id);
  }
}

module.exports = CPU;
