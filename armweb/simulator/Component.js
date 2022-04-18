const Input = require("./Input.js");
const Output = require("./Output.js");

class Component {
  constructor(id, json) {
    this.id = id;
    this.json = json;

    this.inputs = {};
    this.outputs = {};
    this.isSynchronous = false;
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
}

module.exports = Component;
