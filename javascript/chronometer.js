class Chronometer {
  constructor() {
    // ... your code goes here
    //Step 1. Properties
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(printIt) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printIt();
      //console.log(theTime);
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
    return myMinutes;

    //let currentTime = 0;
    //return currentTime;
  }

  getSeconds() {
    // ... your code goes here
    //same logic as before

    let mySeconds = Math.floor(this.currentTime % 60); //that
    return Number(mySeconds);
  }

  twoDigitsNumber(aNumber) {
    // ... your code goes here
    return (aNumber < 10 ? "0" : "") + aNumber;
  }
  stopClick() {
    console.log("Stopped called");
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
    let myMinutes = this.getMinutes();
    let mySeconds = this.getSeconds();
    return (
      this.twoDigitsNumber(myMinutes) + ":" + this.twoDigitsNumber(mySeconds)
    );
  }
}
