class DynamicInterval {
  constructor(func, time) {
    this.id = 0;
    this.time = time;
    this.func = func;
    this.continue = true;
  }
  start() {
    if (!this.continue) {
      return;
    }

    this.id = setTimeout(() => {
      this.func();
      this.start();
    }, this.time);
  }
  stop(callback) {
    this.continue = false;
    clearTimeout(this.id);
    setTimeout(callback, this.time);
  }
  set({
    func = this.func,
    time = this.time
  }) {
    clearTimeout(this.id);
    this.time = time;
    this.func = func;
    this.start();
  }
  stopped() {
    return !this.continue;
  }
};

export const setDynamicInterval = (func, time) => {
  const interval = new DynamicInterval(func, time);

  interval.start();

  return interval;
}
