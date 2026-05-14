function getWeather() {

  let city = document.getElementById("city").value;

  if(city === "") {
    alert("Please enter city name");
    return;
  }

  // Dummy weather data
  document.getElementById("cityName").innerText = city;
  document.getElementById("temp").innerText = "28°C";
  document.getElementById("condition").innerText = "Cloudy ☁";
}