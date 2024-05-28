const apiKey = "452524f9bc8ac59addbcb99095b31c98";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// const apiUrlLoc = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API key}`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");







async function getLoc(position){
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.scr = "Resources/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.scr = "Resources/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.scr = "Resources/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.scr = "Resources/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.scr = "Resources/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


navigator.geolocation.getCurrentPosition(getLoc);
// console.log(locat);






async function checkWether(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.scr = "Resources/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.scr = "Resources/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.scr = "Resources/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.scr = "Resources/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.scr = "Resources/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWether(searchBox.value);
})
searchBox.addEventListener("keypress",(e)=>{
    if (e.key === 'Enter'){
        checkWether(searchBox.value);
    }
})

