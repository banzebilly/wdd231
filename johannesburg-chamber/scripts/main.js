


const btnMenu = document.querySelector("#menu");
const navLinks = document.querySelector(".navigation");

if (btnMenu && navLinks) {

    btnMenu.addEventListener("click", () => {

        btnMenu.classList.toggle("open");
        navLinks.classList.toggle("open");

    });

}









// to convert the weather code from the API
// to sert into a description that people can understand.

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



// WEATHER API URL


const weatherURL =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FJohannesburg`;



// THREE-DAY FORECAST


function displayForecast(data) {

    const daily = data.daily;


    // Loop through the first 3 days
    for (let i = 0; i < 3; i++) {

        // Convert the API date into a JavaScript Date
        const date = new Date(daily.time[i]);


        // Get the day name
        const dayName = date.toLocaleDateString("en-US", {
            weekday: "long"
        });


        // Convert weather code into description
        const description =
            getWeatherDescription(daily.weather_code[i]);


        // Get high temperature
        const high =
            Math.round(daily.temperature_2m_max[i]);


        // Geting low temperature
        const low =
            Math.round(daily.temperature_2m_min[i]);


        // Displaying the day name
        document.querySelector(`#day-${i + 1}`).textContent =
            dayName;


        // Displaying the  weather description
        document.querySelector(`#description-${i + 1}`).textContent =
            description;


        // Display the high and low
        document.querySelector(`#temperature-${i + 1}`).textContent =
            `${high}° / ${low}°`;
    }
}



// GETting the WEATHER


async function getWeather() {

    try {

        // Ask the API for weather information
        const response = await fetch(weatherURL);


        // Check if the API request worked
        if (!response.ok) {

            throw new Error(
                "Weather data could not be loaded."
            );
        }


        // Convert the API response into JavaScript data
        const data = await response.json();


        // Check the complete API data in the browser console
        // console.log(data);


   
        // CURRENT TEMPERATURE
        

        document.querySelector("#temperature").textContent =
            `${Math.round(data.current.temperature_2m)}°`;


       
        // CURRENT WEATHER DESCRIPTION
        

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


       
        // TODAY'S HIGH / LOW
        

        const high =
            Math.round(data.daily.temperature_2m_max[0]);

        const low =
            Math.round(data.daily.temperature_2m_min[0]);


        document.querySelector("#high-low").textContent =
            `${high}° / ${low}°`;


        
        // THREE-DAY FORECAST
       

        displayForecast(data);

    }


    
    // ERROR HANDLING
    

    catch (error) {

        console.error(
            "Error getting weather:",
            error
        );
    }
}


// START WEATHER


getWeather();






// LOAD CHAMBER EVENTS


async function loadEvents() {

    try {

        // Get the events from the JSON file
        const response = await fetch("data/events.json");


        // Check if the request worked
        if (!response.ok) {

            throw new Error("Could not load events.json");

        }


        // Convert JSON into JavaScript data
        const events = await response.json();


        // Check the data
        // console.log("Events loaded:", events);


        // Find the event container
        const eventContainer =
            document.querySelector(".event-container");


        // Clear the container
        eventContainer.innerHTML = "";


        // Create each event
        events.forEach(event => {

            const eventCard =
                document.createElement("div");

            eventCard.classList.add("event-card");


            eventCard.innerHTML = `

                <div class="date">

                    <p>${event.day}</p>

                    <p>${event.month}</p>

                </div>


                <div class="event-info">

                    <h5>${event.category}</h5>

                    <h4>${event.title}</h4>

                    <p>${event.date}</p>


                    <div class="event-location">

                        <i
                            class="fa-solid fa-location-dot"
                            aria-hidden="true">
                        </i>

                        ${event.location}

                    </div>


                    <p>
                        ${event.description}
                    </p>

                </div>

            `;


            eventContainer.appendChild(eventCard);

        });

    }


    catch (error) {

        console.error(
            "Error loading events:",
            error
        );

    }
}



// START EVENTS


loadEvents();






