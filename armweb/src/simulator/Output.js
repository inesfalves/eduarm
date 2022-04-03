class Output {
  constructor(id, component, data) {
    this.id = id;
    this.component = component;
    this.isConnected = false;
    this.data = data;
    this.connectedTo = null;
  }

  get value() {
    return this.data.value;
  }

  set value(newValue) {
    let oldValue = this.value;
    this.data.value = newValue;
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
