async function getWeather() {

  let city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  // YOUR API KEY
  const apiKey = "a2af7cd0cdfd256d4a719fba3dc4cdb3";

  // API URL
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Update UI
    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temp").innerText =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("condition").innerText =
      data.weather[0].main;

  } catch (error) {

    alert(error.message);

  }
}
