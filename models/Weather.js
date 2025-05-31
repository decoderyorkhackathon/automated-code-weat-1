As the language and framework are undefined, I'll provide a JavaScript example using Node.js and Express.js, with the Axios library to make HTTP requests to the OpenWeatherMap API.

```javascript
// Import necessary dependencies
const axios = require('axios');

// Define the Weather model
class Weather {
  constructor(city) {
    this.city = city;
  }

  // Method to get weather data from OpenWeatherMap API
  async getWeatherData() {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=YOUR_API_KEY`);
      return response.data;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
}

module.exports = Weather;
```

This code defines a `Weather` class with a constructor that takes a city name as an argument. It includes a `getWeatherData` method that makes a GET request to the OpenWeatherMap API for the specified city. The method returns the response data if the request is successful, and logs an error message if the request fails.

Please replace `YOUR_API_KEY` with your actual OpenWeatherMap API key.

Note: This is a basic example and does not include a comparison table or a way to view weather metrics for multiple cities simultaneously. Those features would likely be implemented in the front-end of your application, not in the Weather model.