const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6e219af4e6b2409a4ea246c48dbc1c57&units=metric';
module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {  
            
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  }
};
