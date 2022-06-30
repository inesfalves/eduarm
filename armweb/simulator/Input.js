class Input {
  constructor(id, component, data) {
    this.id = id;
    this.component = component;
    this.data = data;
    this.connectedTo = null;
    this.highestLatency = false;
  }

  get value() {
    return this.data.value;
  }

  set value(newValue) {
    this.data.value = newValue;
  }

  toJSON() {
    return {
      id: this.id,
      component: this.component.id,
      data: this.data,
      connectedTo: this.connectedTo?.id,
    };
  }

  toString() {
    return `{id: "${this.id}", component: "${this.component.id}", data: ${this.data}, connectedTo: ${this.connectedTo?.id}}`;
  }
}

module.exports = Input;
