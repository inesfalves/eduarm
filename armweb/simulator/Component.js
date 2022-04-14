const Input = require("./Input.js");
const Output = require("./Output.js");

class Component {
  constructor(id, json) {
    this.id = id;
    this.json = json;

    this.inputs = new Map();
    this.outputs = new Map();
    this.isSynchronous = false;
  }

  addInput(id, data) {
    let input = new Input(id, this, data);
    this.inputs.set(id, input);
    return input;
  }

  addOutput(id, data) {
    let output = new Output(id, this, data);
    this.outputs.set(id, output);
    return output;
  }
}

module.exports = Component;
