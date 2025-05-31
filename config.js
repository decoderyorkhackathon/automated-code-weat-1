As the language and framework are undefined, I'll provide a general example of a configuration file in JavaScript (Node.js) for the OpenWeatherMap API.

```javascript
// config.js

// Importing the dotenv package to use environment variables
const dotenv = require('dotenv');

// Configuring dotenv to use the .env file in the root directory
dotenv.config();

// Exporting the configuration object
module.exports = {
  // OpenWeatherMap API key
  openWeatherMap: {
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: 'http://api.openweathermap.org/data/2.5',
  },
  // Application port
  app: {
    port: process.env.PORT || 3000,
  },
};
```

This configuration file uses the dotenv package to load environment variables from a .env file. The OpenWeatherMap API key and the application port are stored as environment variables for security reasons. The configuration object is then exported so it can be used in other parts of the application.

Please note that you need to create a .env file in the root directory of your project and define the OPEN_WEATHER_MAP_API_KEY variable with your actual API key. The .env file should not be committed to your version control system.