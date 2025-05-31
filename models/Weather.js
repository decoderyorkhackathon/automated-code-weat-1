As the language, framework, database, and testing framework are undefined, I will use JavaScript with Node.js and Express.js framework, MongoDB as the database, and Jest as the testing framework. 

```javascript
// Import necessary dependencies
const mongoose = require('mongoose');
const axios = require('axios');

// Define the schema for the Weather model
const WeatherSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  }
});

// Method to fetch weather data from OpenWeatherMap API
WeatherSchema.statics.fetchWeatherData = async function(city) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
    const data = response.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    };
  } catch (error) {
    console.error(`Failed to fetch weather data for ${city}: ${error}`);
    throw error;
  }
};

// Create the Weather model
const Weather = mongoose.model('Weather', WeatherSchema);

// Export the Weather model
module.exports = Weather;
```

Please replace `process.env.OPEN_WEATHER_MAP_API_KEY` with your actual OpenWeatherMap API key. This code assumes that you have set up a MongoDB database and have mongoose installed and configured. 

This code defines a Weather model with a schema that includes city, temperature, humidity, and wind speed. It also includes a static method to fetch weather data from the OpenWeatherMap API for a given city. The fetched data is then returned in a format that matches the Weather schema. 

Error handling is included in the fetchWeatherData method, where any errors that occur during the API request are logged and then re-thrown.