const Input = require("./Input.js");
const Output = require("./Output.js");

const inputs = new Map();
const outputs = new Map();

class Component {
  constructor(id) {
    this.id = id;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  addInput(id, value) {
    let input = new Input(id, this, value);
    inputs.set(id, input);
    return input;
  }

  addOutput(id, value) {
    let output = new Output(id, this, value);
    outputs.set(id, output);
    return output;
  }
}

module.exports = Component;
