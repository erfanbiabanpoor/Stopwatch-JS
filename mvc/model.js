class Model {
  constructor() {
    this.milSecond = 0;
    //   this.second = 0;
    //   this.minute = 0;
    //   this.hour = 0;
  }

  startTimer() {
    const timer = setInterval(() => {
      this.milSecond++;
      this._render(this.milSecond);
    }, 10);
  }

  bindRender(handler) {
    this.handleRender = handler;
  }

  _render(milSecond) {
    this.handleRender(milSecond);
  }
}

export default Model;
