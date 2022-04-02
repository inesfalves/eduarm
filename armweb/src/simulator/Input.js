class Input {
  constructor(id, component, value) {
    this.id = id;
    this.component = component;
    this.value = value;
    this.connectedTo = null;
  }
}

module.exports = Input;
