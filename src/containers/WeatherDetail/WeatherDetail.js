import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// UI Components
import { Graph, Card } from "../../components";
import { WeatherResumeCard } from "./components";
import { withParentSize } from "@vx/responsive";

// Services
import { getFiveDaysForecast } from "../../services/weatherService";

// Utils
import {
  buildDailyForecastFromList,
  buildWeatherForDayUsingForecasts,
  translateDayNameToEnglish
} from "../../utils";

// Actions
import { closeLoader, deployLoader } from "../../redux/actions";

// Styles
import {
  WeatherDetailWrapper,
  WeatherDetailGraphWrapper,
  WeatherDetailNoData
} from "./WeatherDetail.styled";

const ResponsiveChart = withParentSize(Graph);

class WeatherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { day: null, dayResume: null, wentToFar: false };
  }

  async componentDidMount() {
    this.props.deployLoader();

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

      if (typeof day === "undefined") {
        throw new Error("You went to far. There is no data");
      }

      this.setState({ day, dayResume: buildWeatherForDayUsingForecasts(day) });
    } catch (error) {
      this.setState({ wentToFar: true });
    }

    this.props.closeLoader();
  }

  render() {
    const { day, dayResume, wentToFar } = this.state;

    return (
      <WeatherDetailWrapper>
        {day && <WeatherResumeCard resume={dayResume} />}
        {day && (
          <WeatherDetailGraphWrapper>
            <ResponsiveChart forecasts={day} />
          </WeatherDetailGraphWrapper>
        )}
        {wentToFar && (
          <WeatherDetailNoData>
            <Card>
              <h2>Lo lamento.</h2>
              <p>
                No tengo data para este día{" "}
                <span role="img" aria-label="sad">
                  😔
                </span>
              </p>
            </Card>
          </WeatherDetailNoData>
        )}
      </WeatherDetailWrapper>
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

export default connect(null, mapDispatchToProps)(WeatherDetail);
