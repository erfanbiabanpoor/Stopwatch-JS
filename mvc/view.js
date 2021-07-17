class View {
  constructor() {
    this.root = document.querySelector("#root");
    this.milSecondView = document.createElement("div");
    this.btnStart = document.createElement("button");
    this.btnStart.textContent = "Start";
    this.root.appendChild(this.milSecondView);
    this.root.appendChild(this.btnStart);
  }

  render(milSecond) {
    this.milSecondView.textContent = String(milSecond);
  }

  start(handleStart) {
    this.btnStart.addEventListener("click", (e) => {
      e.preventDefault();

      handleStart();
    });
  }
}

export default View;
