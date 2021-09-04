const loadData = () => {

    const inputfield = document.getElementById('input-field');
    const inputText = inputfield.value;
    inputfield.value = '';
    const API_key = '58c9ff182ca7e08d7f9847ee9ca1b673'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (weather) => {
    console.log(weather);
    /* const displayContainer = document.getElementById('display-container');
    displayContainer.textContent = ''; */
    document.getElementById('city-name').innerText = weather.name;
    document.getElementById('temp').innerText = weather.main.temp;
    document.getElementById('condition').innerText = weather.weather[0].main;
    // console.log(cityName);
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    document.getElementById('weather-icon').setAttribute('src', url);
}