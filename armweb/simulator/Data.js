class Data {
  constructor(size, value) {
    this.size = size;
    this.value = value;

    //Assuming 32 bits
    this.dataSize = 32;
    this.MSB = this.dataSize - 1;
  }

  getExtendedValue(size) {
    return new Data(size, this.signExtend(size));
  }

  signExtend(newSize) {
    if (this.value >= 0) return this.value.toString(2).padStart(newSize, "0");
    return (-this.value - 1)
      .toString(2)
      .replace(/[01]/g, function (d) {
        return +!+d;
      })
      .padStart(newSize, "1");
  }
}

module.exports = Data;
