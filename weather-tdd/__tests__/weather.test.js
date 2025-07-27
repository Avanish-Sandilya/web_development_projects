import { buildWeatherUrl } from "../src/weather.js";
import { fetchWeather } from "../src/weather.js";

test("buildWeatherUrl returns correct endpoint for city", () => {
  const city = "London";
  const API_KEY = "testkey123";
  const url = buildWeatherUrl(city, API_KEY);

  expect(url).toBe(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        main: { temp: 24 },
        weather: [{ description: "cloudy" }],
        name: "London",
        sys: { country: "GB" },
      }),
  })
);

test("fetchWeather returns correct weather data", async () => {
  const data = await fetchWeather("London", "fakeKey");
  expect(data.main.temp).toBe(24);
  expect(data.weather[0].description).toBe("cloudy");
});