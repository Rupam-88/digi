const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
  var now = new Date();

  // Update time display
  document.getElementById("time").innerHTML =
    zeroPadding(now.getHours(), 2) + ":" +
    zeroPadding(now.getMinutes(), 2) + ":" +
    zeroPadding(now.getSeconds(), 2);

  // Update date display with separate elements for year, month, day, and weekday
  const year = now.getFullYear();
  const month = zeroPadding(now.getMonth() + 1, 2); // Months are 0-indexed
  const day = zeroPadding(now.getDate(), 2);
  const weekday = WEEK[now.getDay()];
  document.getElementById("date").innerHTML = year + "-" + month + "-" + day + " (" + weekday + ")";
}

function zeroPadding(num, digit) {
  return String(num).padStart(digit, '0');
}

updateTime();
setInterval(updateTime, 1000);
