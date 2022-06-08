// Implement the 2 following features, plus the bonus feature if you can 💪:

// ⏰Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00
function currentTime() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const curDay = days[now.getDay()];
  const cDate = `
  ${now.getDate()} 
  ${months[now.getMonth()]}
  ${now.getFullYear()} 
  ${now.getHours()}:${now.getMinutes()}`;

  let currentDay = document.querySelector("#currentDay");
  currentDay.innerHTML = curDay;

  let currentDate = document.querySelector("#currentDate");
  currentDate.innerHTML = cDate;
}

currentTime();

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function updateRandomTemperature() {
  let temperature = Math.random();
  let scale = document.querySelector("#scale");
  temperature = temperature * 100 - 50;
  temperature = Math.round(temperature);
  document.querySelector("#temperature").innerHTML = temperature;
}

function updateLocation(inputLocation) {
  document.querySelector("h1").innerHTML = inputLocation;
}

function changeLocation(event) {
  event.preventDefault();
  let inputLocation = document.querySelector("#search-city-input");
  if (inputLocation.value.length > 0) {
    updateLocation(inputLocation.value);
    updateRandomTemperature();
  } else {
    updateLocation("Khmel'nytsky");
    updateRandomTemperature();
    alert("Please, enter a city");
  }
}

let searchForm = document.querySelector("#location-form");
searchForm.addEventListener("submit", changeLocation);

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
// ℃ ℉

function updateScaleF() {
  window.location = "./indexF.html";
}

function updateScale() {
  window.location = "./index.html";
}

let buttonF = document.querySelector("#buttonF");
buttonF.addEventListener("click", updateScale);

let buttonC = document.querySelector("#buttonC");
buttonF.addEventListener("click", updateScaleF);
