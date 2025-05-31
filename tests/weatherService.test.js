```javascript
const weatherService = require('../weatherService');
const axios = require('axios');

jest.mock('axios');

describe('Weather Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch weather data for a single city', async () => {
    const data = {
      data: {
        main: {
          temp: 20,
          humidity: 80
        },
        wind: {
          speed: 5
        }
      }
    };
    axios.get.mockResolvedValue(data);

    const result = await weatherService.getWeather('London');
    expect(result).toEqual(data.data);
    expect(axios.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
  });

  it('should fetch weather data for multiple cities', async () => {
    const data1 = {
      data: {
        main: {
          temp: 20,
          humidity: 80
        },
        wind: {
          speed: 5
        }
      }
    };
    const data2 = {
      data: {
        main: {
          temp: 25,
          humidity: 70
        },
        wind: {
          speed: 10
        }
      }
    };
    axios.get.mockResolvedValueOnce(data1).mockResolvedValueOnce(data2);

    const result = await weatherService.getWeather(['London', 'Paris']);
    expect(result).toEqual([data1.data, data2.data]);
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  it('should handle errors', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(weatherService.getWeather('London')).rejects.toThrow('Network Error');
  });

  it('should throw an error if no city is provided', async () => {
    await expect(weatherService.getWeather()).rejects.toThrow('City is required');
  });

  it('should throw an error if more than 3 cities are provided', async () => {
    await expect(weatherService.getWeather(['London', 'Paris', 'Berlin', 'Madrid'])).rejects.toThrow('Cannot fetch weather for more than 3 cities at a time');
  });
});
```