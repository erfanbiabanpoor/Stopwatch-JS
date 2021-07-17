class Controller {
  constructor(Model, View) {
    this.model = Model;
    this.view = View;

    this.model.bindRender(this.handleRender);

    this.handleRender(this.model.milSecond);

    this.view.start(this.handleStart);
  }

  handleRender = (milSecond) => {
    this.view.render(milSecond);
  };

  handleStart = () => {
    this.model.startTimer();
  };
}

export default Controller;
