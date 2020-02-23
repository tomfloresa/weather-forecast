import moment from "moment";

/**
 * The following takes a list of forecasts, each with a timestamp.
 * It groups the forecasts per day and return an array of forecasts
 * for all the days the list has.
 * @param {Array} list - The list with forecast at certain point of time
 */
export const buildDailyForecastFromList = list => {
  const daysHolder = [];
  let currentArrayIndexInDaysHolder = 0;

  list.forEach((forecast, index, forecastList) => {
    let currentForecast = forecast;
    let lastForecast = index - 1 >= 0 ? forecastList[index - 1] : forecast;

    // Check if currentForecast is same day as lastForecast
    if (
      moment
        .unix(currentForecast.dt)
        .isSame(moment.unix(lastForecast.dt), "day")
    ) {
      /**
       * If current index does not exist within "daysHolder", create a new array (new day),
       * push it to the days array and change the current index, as a new array has been created
       * and the last index is not the old one.
       *
       * Finally, push the forecast to the correct index (day)
       */
      if (typeof daysHolder[currentArrayIndexInDaysHolder] === "undefined") {
        let newDayInDaysHolder = [];
        daysHolder.push(newDayInDaysHolder);

        currentArrayIndexInDaysHolder = daysHolder.length - 1;
      }

      daysHolder[currentArrayIndexInDaysHolder].push(currentForecast);
    } else {
      let newDayInDaysHolder = [];
      daysHolder.push(newDayInDaysHolder);

      currentArrayIndexInDaysHolder = daysHolder.length - 1;

      daysHolder[currentArrayIndexInDaysHolder].push(currentForecast);
    }
  });

  return daysHolder;
};

/**
 * Builds a forecast applying simple math to the group of forecasts
 * @param {Array} dayForecast - An array containing the forecast for an specific time
 * within the day
 */
export const buildWeatherForDayUsingForecasts = dayForecast => {
  let mins = [];
  let maxs = [];
  let pictures = [];

  dayForecast.forEach(forecast => {
    mins.push(forecast.main.temp_min);
    maxs.push(forecast.main.temp_max);
    pictures.push(forecast.weather[0].icon);
  });

  const dayWeather = {
    min: Math.min.apply(null, mins),
    max: Math.max.apply(null, maxs),
    icon: mode(pictures),
    date: moment.unix(dayForecast[0].dt).format("DD/MM/YYYY")
  };

  return dayWeather;
};

const mode = array => {
  if (array.length === 0) return null;

  let modeMap = {};
  let maxEl = array[0];
  let maxCount = 1;

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }

  return maxEl;
};
