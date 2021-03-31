class Chronometer {
  constructor() {
    // ... your code goes here
    //Step 1. Properties
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (this.currentTime === 3) {
        //I need to do it till 3
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    //Logic: to turn seconds into minutes  ?? Math.floor(currentTime * 60) ??
    //STEP ONE. Create a variable to store my minutes
    let myMinutes = 0;

    let currentTime = 0;
    return currentTime;
  }

  getSeconds() {
    // ... your code goes here
    //same logic as before
    let currentTimeSeconds = 0;
    return currentTimeSeconds;
  }

  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.invertalId);
  }
  resetClick() {
    // ... your code goes here
    //setting it back to 0
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}
