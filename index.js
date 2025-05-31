```javascript
// Necessary imports and dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main component
const WeatherComparisonTable = () => {
  // State for storing weather data
  const [weatherData, setWeatherData] = useState([]);

  // Cities to compare
  const cities = ['London', 'New York', 'Tokyo'];

  // Fetch weather data from OpenWeatherMap API
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await Promise.all(
          cities.map(city =>
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR_API_KEY}`)
          )
        );

        setWeatherData(data.map(item => item.data));
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Render comparison table
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Humidity (%)</th>
          <th>Wind Speed (m/s)</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.main.temp}</td>
            <td>{data.main.humidity}</td>
            <td>{data.wind.speed}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default WeatherComparisonTable;
```

Please replace `{YOUR_API_KEY}` with your actual OpenWeatherMap API key. This code fetches weather data for the cities of London, New York, and Tokyo from the OpenWeatherMap API and displays the data in a comparison table. The table includes the city name, temperature, humidity, and wind speed. The data is fetched when the component is first rendered and stored in the `weatherData` state variable. The `useEffect` hook is used to fetch the data, and the `axios` library is used to make the HTTP requests. The `react-bootstrap` library is used to create the table.