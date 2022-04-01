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

    for (let i = 0; i < jsonComponents.length; i++) {
      let componentType = jsonComponents[i][1].componentType;

      //Find corresponding class
      for (let j = 0; j < componentClasses.length; j++) {
        if (componentType === componentClasses[j].name) {
          //Initialize component
          let component = new modules[Object.keys(modules)[j]](
            jsonComponents[i][0],
            jsonComponents[i][1]
          );

          //Add components to component array
          this.cpuComponents.push(component);
        }
      }
    }

    console.log(this.cpuComponents);
  }
}

module.exports = CPU;
