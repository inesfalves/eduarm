class Input {
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
}

module.exports = Input;
