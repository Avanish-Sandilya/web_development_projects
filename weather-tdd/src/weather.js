export function buildWeatherUrl(city, apiKey) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;
}

export async function fetchWeather(city, apiKey) {
  const url = buildWeatherUrl(city, apiKey);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('City not found or API error');
  }

  return response.json();
}
