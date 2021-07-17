import Controller from "./mvc/controller.js";
import Model from "./mvc/model.js";
import View from "./mvc/view.js";

const app = new Controller(new Model(), new View());

// window.onload = () => {
//   let seconds = 0;
//   let tens = 0;
//   let minutes = 0;
//   const appendTens = document.getElementById("tens");
//   const appendSeconds = document.getElementById("seconds");
//   const appendMinutes = document.getElementById("minutes");
//   const buttonStart = document.getElementById("button-start");
//   const buttonStop = document.getElementById("button-stop");
//   const buttonReset = document.getElementById("button-reset");
//   const buttonLap = document.getElementById("button-lap");
//   const lapList = document.getElementById("lap");
//   let Interval;

//   buttonStart.addEventListener("click", () => {
//     if (Interval) {
//       clearInterval(Interval);
//     }
//     Interval = setInterval(startTimer, 10);
//   });

//   buttonStop.addEventListener("click", () => {
//     clearInterval(Interval);
//   });

//   const reset = () => {
//     if (Interval) {
//       clearInterval(Interval);
//     }
//     tens = 0;
//     seconds = 0;
//     minutes = 0;
//     appendTens.innerHTML = "00";
//     appendSeconds.innerHTML = "00";
//     appendMinutes.innerHTML = "00";
//     lapList.innerHTML = "";
//   };
//   buttonReset.addEventListener("click", reset);

//   buttonLap.addEventListener("click", () => {
//     if (Interval) {
//       const li = document.createElement("li");
//       li.innerHTML =
//         appendMinutes.innerHTML +
//         ":" +
//         appendSeconds.innerHTML +
//         ":" +
//         appendTens.innerHTML;

//       lapList.appendChild(li);
//     }
//   });

//   const startTimer = () => {
//     tens++;
//     if (tens <= 9) {
//       appendTens.innerHTML = "0" + tens;
//     } else if (tens > 9 && tens < 100) {
//       appendTens.innerHTML = tens;
//     } else {
//       seconds++;
//       tens = 0;
//       appendTens.innerHTML = "00";
//     }

//     if (seconds <= 9) {
//       appendSeconds.innerHTML = "0" + seconds;
//     } else if (seconds > 9 && seconds < 60) {
//       appendSeconds.innerHTML = seconds;
//     } else {
//       minutes++;
//       seconds = 0;
//       appendSeconds.innerHTML = "00";
//     }

//     if (minutes <= 9) {
//       appendMinutes.innerHTML = "0" + minutes;
//     } else if (minutes > 9 && minutes < 60) {
//       appendMinutes.innerHTML = minutes;
//     } else {
//       reset();
//     }
//   };
// };
