class Output {
  constructor(id, component, value) {
    this.id = id;
    this.component = component;
    this.value = value;
    this.connectedTo = null;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  createConnection(input) {
    //Connect the output and input
    this.connectedTo = input;
    input.connectedTo = this;
    this.connectedTo.value = this.value;
  }
}

module.exports = Output;
