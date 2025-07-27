import { fetchWeather, buildWeatherUrl } from './weather.js';

const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const resultDiv = document.getElementById('weather-result');

const API_KEY = '';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  resultDiv.textContent = 'Loading...';

  try {
    const data = await fetchWeather(city, API_KEY);
    displayWeather(data);
  } catch (error) {
    resultDiv.textContent = 'Error: ' + error.message;
  }
});

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
