As an AI model, I need specific details to generate the code. The language and framework are undefined in the provided details. However, I'll assume you want this in JavaScript using Node.js and Express.js for the backend, and React.js for the frontend. 

Here's a simplified version of what your index.js file might look like:

```javascript
// Necessary imports
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Initialize express app
const app = express();

// Use cors middleware
app.use(cors());

// Define OpenWeatherMap API key
const API_KEY = 'your_openweathermap_api_key';

// Endpoint to get weather data for a city
app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    // Make a request to the OpenWeatherMap API
    const response = await axios.get(url);

    // Send the data back to the client
    res.json(response.data);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

This is a very basic implementation and does not include the frontend part. For the frontend, you would use React.js or another library/framework to make requests to this server and display the data. Also, remember to replace 'your_openweathermap_api_key' with your actual API key.

Please note that this is a simplified version and a real-world application would require more robust error handling, validation, and potentially more features depending on your needs.