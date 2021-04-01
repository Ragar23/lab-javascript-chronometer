const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let minute = chronometer.getMinutes();
  let twoDig = chronometer.twoDigitsNumber(minute);
  minUni.innerHTML = twoDig[1];
  minDec.innerHTML = twoDig[0];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigs = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = twoDigs[1];
  secDec.innerHTML = twoDigs[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  // ... your code goes here

  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  //but its not stopping.
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerHTML == "START") {
    setStopBtn();
    //console.log(btnLeft.innerHTML);
    chronometer.startClick(printTime);
  } else if (btnLeft.innerHTML == "STOP") {
    chronometer.stopClick(); // I cant stop it
    setStartBtn();
    //chronometer.stopClick();
    console.log(btnLeft.innerHTML);
  }

  // start running the conditional
  // now this code should run setStopBtn if press Start
  // go back to Start if is clicked and currently is Stop
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerHTML == "RESET") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
