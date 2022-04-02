const Input = require("./Input.js");
const Output = require("./Output.js");

class Component {
  constructor(id, json) {
    this.id = id;
    this.json = json;

    this.inputs = new Map();
    this.outputs = new Map();
  }

  addInput(id, value) {
    let input = new Input(id, this, value);
    this.inputs.set(id, input);
    return input;
  }

  addOutput(id, value) {
    let output = new Output(id, this, value);
    this.outputs.set(id, output);
    return output;
  }
}

module.exports = Component;
