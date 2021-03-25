const classKey = document.querySelector(".keys");
const classAudio = document.querySelector(".audio");
document.addEventListener("keydown", function clickKey(event) {
  key = "." + event.code;
  if (classKey.querySelector(key) === null) return;
  classKey.querySelector(key).classList.add("style");
  classAudio.querySelector(key).play();
});
document.addEventListener("keyup", function clickKey(event) {
  key = "." + event.code;
  if (classKey.querySelector(key) === null) return;
  classKey.querySelector(key).classList.remove("style");
});
document.addEventListener("click", function clickMouse(event) {
  key = "." + event.target.className;
  if (classKey.querySelector(key) === null) return;
  classAudio.querySelector(key).play();
});
