class Stack {
  constructor () {
    this._count = 0;
    this._storage = {};
  }

  peek = () => (this.size() > 0 ? this._storage[this.size() - 1] : undefined);

  pop = () => {
    let value;

    if (this.size() > 0) {
      value = this._storage[this.size() - 1];
      this._count -= 1;
    }

    return value;
  };

  push = (value) => {
    this._storage[this._count] = value;
    this._count += 1;
  };

  size = () => this._count;
}

module.exports = Stack;
