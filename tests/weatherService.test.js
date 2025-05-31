```javascript
const weatherService = require('../weatherService');
const axios = require('axios');

jest.mock('axios');

describe('Weather Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch weather data for multiple cities', async () => {
    const cities = ['London', 'Paris', 'Berlin'];
    const mockData = {
      data: {
        main: {
          temp: 20,
          humidity: 80,
        },
        weather: [
          {
            description: 'clear sky',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const weatherData = await weatherService.getWeatherDataForCities(cities);

    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(weatherData).toHaveLength(3);
    expect(weatherData[0]).toHaveProperty('city');
    expect(weatherData[0]).toHaveProperty('temperature');
    expect(weatherData[0]).toHaveProperty('humidity');
    expect(weatherData[0]).toHaveProperty('description');
  });

  it('should handle errors when fetching weather data', async () => {
    const cities = ['London', 'Paris', 'Berlin'];

    axios.get.mockRejectedValue(new Error('Network error'));

    await expect(weatherService.getWeatherDataForCities(cities)).rejects.toThrow('Network error');
  });

  it('should return empty array when no cities are provided', async () => {
    const cities = [];

    const weatherData = await weatherService.getWeatherDataForCities(cities);

    expect(weatherData).toEqual([]);
  });

  it('should handle invalid city names', async () => {
    const cities = ['InvalidCity'];

    axios.get.mockRejectedValue(new Error('City not found'));

    await expect(weatherService.getWeatherDataForCities(cities)).rejects.toThrow('City not found');
  });
});
```