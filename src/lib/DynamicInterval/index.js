class DynamicInterval {
  constructor(func, time) {
    this.id       = 0;
    this.time     = time;
    this.func     = func;
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
  stop() {
    clearTimeout(this.id);
    this.continue = false;
  }
  set({ func = this.func, time = this.time }) {
    clearTimeout(this.id);
    this.time = time;
    this.func = func;
    this.start();
  }
};

export const setDynamicInterval = (func, time) => {
  const interval = new DynamicInterval(func, time);

  interval.start();

  return interval;
}
