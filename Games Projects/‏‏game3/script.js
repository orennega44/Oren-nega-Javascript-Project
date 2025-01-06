const API_KEY = '46512ac4296956e20f7723752829389a'; //! תקלת אבטחה זמנית
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const query = document.getElementById("inputCity");
const city = document.getElementById("city");
const button = document.querySelector("button");
const desp = document.getElementById("description");
const temp = document.getElementById("temp");
const img = document.getElementById("pic");
const errorMessage = document.getElementById('errorMessage');


async function getWeather(city) {
    try {
        const res = await fetch(URL + city);
        const data = await res.json();
        displayWeather(data)
    } catch (err) {
        console.error(err);
    }


}


function displayWeather(weatherData) {

    if (weatherData.cod === 200) {
        city.innerText = query.value;
        desp.innerText = weatherData.weather[0].description;
        temp.innerText = weatherData.main.temp;
        img.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        img.style.display = "block";
        desp.style.display = "block";
        temp.style.display = "block";
        city.style.display = "block";
        errorMessage.innerText = ''

    } else {


        city.innerText = "";
        city.style.display = "none";
        desp.innerText = "";
        desp.style.display = "none";
        temp.innerText = "";
        temp.style.display = "none";
        img.style.display = "none";
        errorMessage.innerText = 'City Not Found...'
        


    }
};

button.addEventListener('click', () => {
    getWeather(query.value);
});