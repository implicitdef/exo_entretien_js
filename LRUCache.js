module.exports = class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = {};
    this.sharedCounter = 1;
  }

  get(key) {
    const o = this.store[key];
    if (!o) {
      return null;
    }
    o.counter = this.sharedCounter++;
    return o.value;
  }

  put(key, value) {
    this.store[key] = {
      value,
      counter: this.sharedCounter++,
    };

    if (Object.keys(this.store).length > this.capacity) {
      let oldestKeyFound = null;
      Object.keys(this.store).forEach(k => {
        if (
          !oldestKeyFound ||
          this.store[k].counter < this.store[oldestKeyFound].counter
        ) {
          oldestKeyFound = k;
        }
      });
      delete this.store[oldestKeyFound];
    }
  }
};
