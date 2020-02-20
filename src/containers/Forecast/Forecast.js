import React, { Component } from "react";

// UI Components
import { TodaysWeatherCard, ForecastSliderCard } from "./components";
import { Slider, Card } from "./../../components";

// Services
import { getCurrentWeather, getFiveDaysForecast } from "./../../services";

// Utils
import {
  buildDailyForecastFromList,
  buildWeatherForDayUsingForecasts
} from "../../utils";

// Styles
import { ForecastWrapper, ForecastSliderWrapper } from "./Forecast.styled";

// Slider configuration
const sliderConfiguration = {
  pagination: {
    clickable: true
  },
  slidesPerView: 2,
  spaceBetween: 22,
  observer: true
};

export default class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = { currentWeather: null };
  }

  async componentDidMount() {
    try {
      const currentWeather = await (await getCurrentWeather()).data;
      const forecastedWeather = await (await getFiveDaysForecast()).data;
      const forecastArrangedByDays = buildDailyForecastFromList(
        forecastedWeather.list
      );
      const forecastPerDay = forecastArrangedByDays.map(forecast =>
        buildWeatherForDayUsingForecasts(forecast)
      );

      console.log(forecastPerDay);

      this.setState({
        currentWeather,
        forecastPerDay
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { currentWeather, forecastPerDay } = this.state;

    return (
      <ForecastWrapper>
        <TodaysWeatherCard weather={currentWeather} />
        <ForecastSliderWrapper>
          <Slider
            config={sliderConfiguration}
            slides={
              forecastPerDay
                ? forecastPerDay.map(forecast => (
                    <ForecastSliderCard
                      forecastedWeather={forecast}
                      key={forecast.min}
                    />
                  ))
                : [<Card />]
            }
          />
        </ForecastSliderWrapper>
      </ForecastWrapper>
    );
  }
}
