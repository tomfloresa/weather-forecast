import axios from "axios";

const ENDPOINT_HOST = "https://api.openweathermap.org/data/2.5";
const WEATHER_ENDPOINT_PATH = "weather";
const FORECAST_ENDPOINT_PATH = "forecast";

const DEFAULT_CITY = "3873544";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const commonParams = {
  id: DEFAULT_CITY,
  appid: WEATHER_API_KEY,
  units: "metric"
};

export const getCurrentWeather = async () => {
  return axios.get(`${ENDPOINT_HOST}/${WEATHER_ENDPOINT_PATH}`, {
    params: {
      ...commonParams
    }
  });
};

export const getFiveDaysForecast = async () => {
  return axios.get(`${ENDPOINT_HOST}/${FORECAST_ENDPOINT_PATH}`, {
    params: {
      ...commonParams
    }
  });
};
