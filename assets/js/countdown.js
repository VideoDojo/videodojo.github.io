// Get the current UTC time in milliseconds
var now = Date.now();

// Define the target UTC date and time (June 11, 2023, 00:59:00 UTC)
var targetDate = Date.UTC(2023, 5, 10, 22, 59, 0);

// Calculate the time difference in milliseconds
var timeDiff = targetDate - now;

updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Calculate the remaining time
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  var seconds = Math.floor((timeDiff / 1000) % 60);

  // Display the remaining time on the webpage
  var daysEl = document.getElementById('countdownDays');
  daysEl.textContent = days;
  var hoursEl = document.getElementById('countdownHours');
  hoursEl.textContent = hours;
  var minutesEl = document.getElementById('countdownMinutes');
  minutesEl.textContent = minutes;
  var secondsEl = document.getElementById('countdownSeconds');
  secondsEl.textContent = seconds;

  // Decrease the time difference by one second
  timeDiff -= 1000;

  // Check if the countdown has reached zero
  if (timeDiff < 0) {
    countdownElement.textContent = 'Countdown finished!';
  }
}