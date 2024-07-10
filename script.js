let count = 0;
let intervalId;

function updateCounter() {
  count++;
  document.getElementById("counter").innerText = count;
}

document.getElementById("startButton").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(updateCounter, 1000);
  }
});

document.getElementById("stopButton").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});

document.getElementById("resetButton").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  document.getElementById("counter").innerText = count;
});
