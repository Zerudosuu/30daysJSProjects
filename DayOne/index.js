const searchbutton = document.querySelector(`.searchbutton`);
let cityname = document.querySelector(`.cityname`);

const apiKey = "726f2da427a59a76d063b44e24fcfcaa";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(`.city`).innerHTML = data.name;
  document.querySelector(`.temp`).innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(`.humidity`).innerHTML = data.main.humidity + "%";
  document.querySelector(`.wind`).innerHTML = data.wind.speed + " km/h";
}

searchbutton.addEventListener("click", () => {
  checkWeather(cityname.value);
});
