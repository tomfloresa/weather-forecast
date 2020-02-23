import React, { Component } from "react";
import moment from "moment";

// UI Components
import { Graph } from "../../components";
import { withParentSize } from "@vx/responsive";

// Services
import { getFiveDaysForecast } from "../../services/weatherService";

// Utils
import {
  buildDailyForecastFromList,
  translateDayNameToEnglish
} from "../../utils";

// Styles
import {
  WeatherDetailWrapper,
  WeatherDetailGraphWrapper
} from "./WeatherDetail.styled";

const ResponsiveChart = withParentSize(Graph);

class WeatherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { day: null };
  }
  async componentDidMount() {
    try {
      const fiveDaysForecast = await (await getFiveDaysForecast()).data;
      const groupedDaysForecast = buildDailyForecastFromList(
        fiveDaysForecast.list
      );

      // Translate name to spanish
      const dayNameTranslated = translateDayNameToEnglish(
        this.props.match.params.dayName
      );

      // Iterate over the days and find a match between days
      // It always goes to the future
      const day = groupedDaysForecast.filter(
        group =>
          moment
            .unix(group[0].dt)
            .format("dddd")
            .toLowerCase() === dayNameTranslated
      )[0];

      console.log(day);

      this.setState({ day });
    } catch (error) {}
  }

  render() {
    const { day } = this.state;

    return (
      <WeatherDetailWrapper>
        {day && (
          <WeatherDetailGraphWrapper>
            <ResponsiveChart forecasts={day} />
          </WeatherDetailGraphWrapper>
        )}
      </WeatherDetailWrapper>
    );
  }
}

export default WeatherDetail;
