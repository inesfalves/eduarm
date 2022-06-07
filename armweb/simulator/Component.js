const Input = require("./Input.js");
const Output = require("./Output.js");

class Component {
  constructor(id, json) {
    this.id = id;
    this.json = json;

    this.inputs = {};
    this.outputs = {};
    this.isSynchronous = false;
    this.latency = 0;
  }

  addInput(id, data) {
    let input = new Input(id, this, data);
    this.inputs[id] = input;
    return input;
  }

  addOutput(id, data) {
    let output = new Output(id, this, data);
    this.outputs[id] = output;
    return output;
  }

  calculateLatency() {
    let higherLatency = 0;
    let componentHigher = "";
    let inputLatencies = [];
    for (let inp of Object.values(this.inputs)) {
      if (inp.connectedTo !== null) {
        inputLatencies.push(inp.connectedTo.component.latency);
      }
    }
    higherLatency = Math.max.apply(Math, inputLatencies);
    return (this.latency += higherLatency);
  }
}

module.exports = Component;
