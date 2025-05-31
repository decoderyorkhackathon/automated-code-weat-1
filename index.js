As the language and framework are undefined, I'll use JavaScript with Node.js and Express.js for this task. Also, I'll use Axios for API requests and EJS for rendering the comparison table.

```javascript
// Necessary imports
const express = require('express');
const axios = require('axios');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Define OpenWeatherMap API key
const API_KEY = 'your_openweathermap_api_key';

// Define route to display weather comparison table
app.get('/compare', async (req, res) => {
  try {
    // Define cities to compare
    const cities = ['London', 'Paris', 'New York'];

    // Fetch weather data for each city
    const weatherData = await Promise.all(
      cities.map(city => 
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      )
    );

    // Extract necessary data
    const data = weatherData.map(response => ({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed
    }));

    // Render comparison table with fetched data
    res.render('compare', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching weather data.');
  }
});

// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));
```

Please replace `'your_openweathermap_api_key'` with your actual OpenWeatherMap API key. Also, you need to create a `compare.ejs` file in the `views` directory to render the comparison table. This file should be designed to accept and display the `data` object passed to it from the route handler.