const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(e) {
  e.preventDefault();
  const inputValue = loginInput.value;
  console.log(inputValue);
}

loginForm.addEventListener("submit", onLoginSubmit);
