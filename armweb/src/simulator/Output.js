class Output {
  constructor(id, component, value) {
    this.id = id;
    this.component = component;
    this.isConnected = false;
    this.value = value;
    this.connectedTo = null;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    let oldValue = this.value;
    this._value = newValue;
    if (this.isConnected && this.value !== oldValue) {
      this.connectedTo.value = newValue;
    }
  }

  createConnection(input) {
    //Connect the output and input
    this.isConnected = true;
    this.connectedTo = input;
    input.connectedTo = this;
    input.value = this.value;
  }
}

module.exports = Output;
