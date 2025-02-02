let count = 0.0;
let intervalId;

function updateCounter() {
  count += 0.01;
  document.getElementById("counter").innerText = count.toFixed(2);
}

document.getElementById("startButton").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(updateCounter, 10);
  }
  document.getElementById("startButton").style.display = "none";
  document.getElementById("stopButton").style.display = "inline-block";
});

document.getElementById("stopButton").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  document.getElementById("startButton").style.display = "inline-block";
  document.getElementById("stopButton").style.display = "none";
});

document.getElementById("resetButton").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  count = 0.0;
  document.getElementById("counter").innerText = count;
  document.getElementById("startButton").style.display = "inline-block";
  document.getElementById("stopButton").style.display = "none";
});
