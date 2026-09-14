//toonvert the weather code from the API
// into a description people can understand.

function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Fog",
        51: "Light drizzle",
        53: "Drizzle",
        55: "Dense drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        80: "Rain showers",
        81: "Rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorm"
    };

    return weatherCodes[code] || "Unknown weather";
}


// JOHANNESBURG COORDINATES

const latitude = -26.2041;
const longitude = 28.0473;


//wEATHER API URL 

const weatherURL =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FJohannesburg`;


// THREE-DAY FORECAST

function displayForecast(data) {
    const daily = data.daily;


    for (let i = 0; i < 3; i++) {

       
        const date = new Date(daily.time[i]);

   
        const dayName = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

       
        const description =
            getWeatherDescription(daily.weather_code[i]);

       
        const high =
            Math.round(daily.temperature_2m_max[i]);

      
        const low =
            Math.round(daily.temperature_2m_min[i]);


       
        document.querySelector(`#day-${i + 1}`).textContent =
            dayName;

      
        document.querySelector(`#description-${i + 1}`).textContent =
            description;

     
        document.querySelector(`#temperature-${i + 1}`).textContent =
            `${high}° / ${low}°`;
    }
}




export async function getWeather() {

    try {

        //tosk the API for weather information
        const response = await fetch(weatherURL);

        
        if (!response.ok) {
            throw new Error(
                "Weather data could not be loaded."
            );
        }

      
        const data = await response.json();


        //the RENT TEMPERATURE

        document.querySelector("#temperature").textContent =
            `${Math.round(data.current.temperature_2m)}°`;


        //the RENT WEATHER DESCRIPTION

        const description =
            getWeatherDescription(
                data.current.weather_code
            );

        document.querySelector("#weather-description").textContent =
            description;


        // HUMIDITY

        document.querySelector("#humidity").textContent =
            `${data.current.relative_humidity_2m}%`;


        // WIND

        document.querySelector("#wind").textContent =
            `${Math.round(data.current.wind_speed_10m)} km/h`;


        // the low / high

        const high =
            Math.round(data.daily.temperature_2m_max[0]);

        const low =
            Math.round(data.daily.temperature_2m_min[0]);

        document.querySelector("#high-low").textContent =
            `${high}° / ${low}°`;


        // three days forcast

        displayForecast(data);

    } catch (error) {

        console.error(
            "Error getting weather:",
            error
        );
    }
}