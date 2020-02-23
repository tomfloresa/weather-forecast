import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

// UI Components
import { TodaysWeatherCard, ForecastSliderCard } from "./components";
import { Slider, Card } from "./../../components";

// Services
import { getCurrentWeather, getFiveDaysForecast } from "./../../services";

// Utils
import {
  buildDailyForecastFromList,
  buildWeatherForDayUsingForecasts,
  translateDayNameToSpanish
} from "../../utils";

// Actions
import { closeLoader, deployLoader } from "../../redux/actions";

// Styles
import { ForecastWrapper, ForecastSliderWrapper } from "./Forecast.styled";

// Slider configuration
const sliderConfiguration = {
  pagination: {
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    el: ".swiper-pagination"
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  observer: true,
  initialSlide: 0,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
    stretch: 10
  },
  keyboard: true
};

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = { currentWeather: null };
  }

  async componentDidMount() {
    this.props.deployLoader();

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

    this.props.closeLoader();
  }

  /**
   * ACTIONS
   */
  onForecastClicked = date => {
    const dayFromDate = moment(date, "DD/MM/YYYY").format("dddd");
    const dayInSpanish = translateDayNameToSpanish(dayFromDate);

    this.props.history.push(`/${dayInSpanish}`);
  };

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
                      forecastClicked={date => this.onForecastClicked(date)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeLoader,
      deployLoader
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Forecast);
