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

const ForecastSliderCard = ({ forecastedWeather }) => {
  return (
    <ForecastSliderCardWrapper>
      <ForecastSliderCardImage src={getWeatherImage(forecastedWeather.icon)} />
      <ForecastSliderInfo>
        <ForecastSliderCardTitle>{`Min: ${Math.ceil(
          forecastedWeather.min
        )}ºC`}</ForecastSliderCardTitle>
        <ForecastSliderCardTitle>{`Min: ${Math.ceil(
          forecastedWeather.max
        )}ºC`}</ForecastSliderCardTitle>
      </ForecastSliderInfo>
    </ForecastSliderCardWrapper>
  );
};

export default ForecastSliderCard;
