const clock = document.querySelector("h2#clock");
function setClock() {
  clock.innerText = new Date().toTimeString().split(" ")[0];
}

setClock();
setInterval(setClock, 100);
