const loadData = () => {

    const inputfield = document.getElementById('input-field');
    const inputText = inputfield.value;
    console.log(inputText);
    inputfield.value = '';
    const API_key = '58c9ff182ca7e08d7f9847ee9ca1b673'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (weather) => {
    const displayContainer = document.getElementById('display-container');
    displayContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('display-container', 'w-50', 'mx-auto');
    div.innerHTML = `
        <h2>City Name: ${weather.name}</h2>
        <p>Country Name:${weather.sys.country} <br>Weather Temparature ${weather.main.temp} <br> Wind Speed: ${weather.wind.speed} <br> Humidity: ${weather.main.humidity}</p>
    `;
    displayContainer.appendChild(div);
}