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
    this.totalLatency = 0;
    this.highestLatencyInput = "";
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
    if (this.id === "PC") {
      return;
    }
    let higherLatency = 0;
    let higherInput = null;
    for (let inp of Object.values(this.inputs)) {
      if (
        inp.connectedTo !== null &&
        inp.connectedTo.component.totalLatency >= higherLatency
      ) {
        higherLatency = inp.connectedTo.component.totalLatency;
        higherInput = inp;
      }
    }
    higherInput.highestLatency = true;
    return (this.totalLatency = this.latency + higherLatency);
  }
}

module.exports = Component;
