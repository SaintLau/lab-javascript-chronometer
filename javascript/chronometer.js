class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.intervalMilliSec = 0;
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return parseInt(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    // ... your code goes here
    return parseInt(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(value) {
    // ... your code goes here
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilliSec);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
