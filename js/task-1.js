class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value = "days"]'),
      hours: document.querySelector('[data-value = "hours"]'),
      mins: document.querySelector('[data-value = "mins"]'),
      secs: document.querySelector('[data-value = "secs"]'),
    };

    this.updateTime();
  }

  // targetDate = new Date('Mar 17, 2021');

  // startTimer() {}

  updateTime() {
    setInterval(() => {
      this.currentDate = new Date();
      this.remainingTime = this.targetDate - this.currentDate;

      this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
      this.hours = pad(
        Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.mins = pad(Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
      this.secs = pad(Math.floor((this.remainingTime % (1000 * 60)) / 1000));

      this.refs.days.textContent = `${this.days}`;
      this.refs.hours.textContent = `${this.hours}`;
      this.refs.mins.textContent = `${this.mins}`;
      this.refs.secs.textContent = `${this.secs}`;

      // updateTime(deltaTime);
    }, 1000);

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

// const refs = {
//     days: document.querySelector('[data-value = "days"]'),
//     hours: document.querySelector('[data-value = "hours"]'),
//     mins: document.querySelector('[data-value = "mins"]'),
//     secs: document.querySelector('[data-value = "secs"]'),

// }

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 17, 2021'),
});
