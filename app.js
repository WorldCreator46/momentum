const h1 = document.querySelector(".hello h1");

function handleh1click() {
  h1.style.color = "red";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

h1.addEventListener("click", handleh1click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
