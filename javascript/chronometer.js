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
    let myMinutes = Math.floor(this.currentTime / 60);
    this.currentTime + myMinutes;
    return myMinutes;

    //let currentTime = 0;
    //return currentTime;
  }

  getSeconds() {
    // ... your code goes here
    //same logic as before
    let mySeconds = this.currentTime;
    return Number(mySeconds);
  }

  twoDigitsNumber(aNumber) {
    // ... your code goes here
    return (aNumber < 10 ? "0" : "") + aNumber;
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
  splitClick(myMinutes, mySeconds) {
    // ... your code goes here
    myMinutes = this.currentTime;
    mySeconds = this.currentTime;

    return myMinutes + ":" + mySeconds;
  }
}
