async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "e6c118d3ef0e54e1d9ccd85aba897b5f"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weather = data.weather[0].description;
    const temp = data.main.temp;
    const icon = data.weather[0].icon;

    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weather}">
      <p><strong>${temp}°C</strong></p>
      <p>${weather}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
