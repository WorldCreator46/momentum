const API_KEY = "99f70b4eeb9d70b0e24278bef91bb4ee";

function onGeoOk(p) {
  const lat = p.coords.latitude;
  const lon = p.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
}
function onGeoError() {
  alert("찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
