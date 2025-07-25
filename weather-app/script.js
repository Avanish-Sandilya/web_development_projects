const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const resultDiv = document.getElementById("weather-result");

const API_KEY = ""; 

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city === "") return;

  try {
    resultDiv.textContent = "Loading...";
    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
  } catch (error) {
    resultDiv.textContent = "Error fetching weather. Please try again.";
  }
});

async function fetchWeather(city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();
  return data;
}

function displayWeather(data) {
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const cityName = data.name;
  const country = data.sys.country;

  resultDiv.innerHTML = `
    <strong>${cityName}, ${country}</strong><br />
    ${description}<br />
    🌡️ Temperature: ${temp} °C
  `;
}

