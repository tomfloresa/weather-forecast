import React from "react";
import styled from "styled-components";

// UI Components
import { Card } from "./../../../../components";

// Utils
import { getWeatherImage } from "../../../../utils";

// Styles
const ForecastSliderCardWrapper = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ForecastSliderCardImage = styled.img`
  margin: auto;
  display: block;
`;

const ForecastSliderInfo = styled.div``;

const ForecastSliderCardTitle = styled.span`
  display: block;
  font-weight: 800;
  text-align: center;
`;

const ForecastSliderCardDate = styled(ForecastSliderCardTitle)`
  margin: 16px;
`;

const ForecastSliderCard = ({ forecastedWeather, forecastClicked }) => {
  return (
    <ForecastSliderCardWrapper onClick={() => forecastClicked()}>
      <ForecastSliderCardImage src={getWeatherImage(forecastedWeather.icon)} />
      <ForecastSliderInfo>
        <ForecastSliderCardTitle>{`Min: ${Math.ceil(
          forecastedWeather.min
        )}ºC`}</ForecastSliderCardTitle>
        <ForecastSliderCardTitle>{`Max: ${Math.ceil(
          forecastedWeather.max
        )}ºC`}</ForecastSliderCardTitle>
        <ForecastSliderCardDate>
          {forecastedWeather.date}
        </ForecastSliderCardDate>
      </ForecastSliderInfo>
    </ForecastSliderCardWrapper>
  );
};

export default ForecastSliderCard;
