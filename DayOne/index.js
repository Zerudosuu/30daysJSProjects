const searchbutton = document.querySelector(`.searchbutton`);
let cityname = document.querySelector(`.cityname`);
let WeatherImg = document.querySelector(`.weather-icon`);

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

  if (data.weather[0].main == "Clouds") {
    WeatherImg.src = "public/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    WeatherImg.src = "public/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    WeatherImg.src = "public/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    WeatherImg.src = "public/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    WeatherImg.src = "public/images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    WeatherImg.src = "public/images/snow.png";
  }

  document.querySelector(`.weather`).style = "display: block;";
}

searchbutton.addEventListener("click", () => {
  checkWeather(cityname.value);
});
cityname.value = "";
