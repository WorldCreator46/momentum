const API_KEY = "99f70b4eeb9d70b0e24278bef91bb4ee";

function onGeoOk(p) {
  const lat = p.coords.latitude;
  const lon = p.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
