As an AI model, I need specific details to generate the code. The language and framework are undefined in the provided details. However, I can provide a general idea of how the code might look in JavaScript using the Express.js framework and axios for API requests. 

```javascript
// Import necessary dependencies
const express = require('express');
const axios = require('axios');

// Initialize express app
const app = express();

// Set up middleware to parse JSON
app.use(express.json());

// Define cities to compare
const cities = ['City1', 'City2', 'City3'];

// Define OpenWeatherMap API key
const apiKey = 'your_openweathermap_api_key';

// Define route to get weather data
app.get('/weather', async (req, res) => {
  try {
    // Initialize array to store weather data
    let weatherData = [];

    // Loop through cities and fetch weather data
    for (let city of cities) {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      weatherData.push(response.data);
    }

    // Send weather data as response
    res.json(weatherData);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```

Please replace 'City1', 'City2', 'City3' with the actual city names and 'your_openweathermap_api_key' with your actual OpenWeatherMap API key. This code does not include a comparison table as it's a backend code. The comparison table should be implemented on the frontend side. 

Please note that this is a basic example and might need adjustments based on your specific requirements. Also, remember to handle your API keys securely in a production environment, don't hardcode them into your files.