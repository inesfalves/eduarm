class Input {
  constructor(id, component, data) {
    this.id = id;
    this.component = component;
    this.data = data;
    this.connectedTo = null;
  }

  get value() {
    return this.data.value;
  }

  set value(newValue) {
    this.data.value = newValue;
  }
}

module.exports = Input;
