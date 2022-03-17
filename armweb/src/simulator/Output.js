class Output {
  constructor(id, component, value) {
    this.id = id;
    this.component = component;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }
}

module.exports = Output;
