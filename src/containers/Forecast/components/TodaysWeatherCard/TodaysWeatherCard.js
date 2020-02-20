import React from "react";
import moment from "moment";

import styled from "styled-components";
import { rem } from "polished";
import { device } from "../../../../device";

// Components
import { Card } from "../../../../components";

// Utils
import {getWeatherImage} from "../../../../utils";

// Styles
const TodaysWeatherCardWrapper = styled.div`
  display: flex;
`;

const TodaysWeatherCardDate = styled.span`
  padding: 8px;
  color: ${props => props.theme.colors.white};
  background: #0077ff;
  display: block;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 800;
  width: fit-content;
`;

const TodaysWeatherCardLeft = styled.div`
  flex-grow: 2;
`;

const TodaysWeatherCardRight = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodaysWeatherCardTitle = styled.span`
  font-size: ${rem("22px")};
  font-weight: 500;
  display: block;
`;

const TodaysWeatherCardWeather = styled.span`
  font-size: ${rem("120px")};
  line-height: 100%;
  display: block;

  @media ${device.mobileS} {
    font-size: ${rem("60px")};
  }

  @media ${device.mobileM} {
    font-size: ${rem("90px")};
  }
`;

const TodaysWeatherCardImage = styled.img`
  display: block;
`;

const TodaysWeatherCard = ({ weather }) => {
  return (
    <React.Fragment>
      {weather && (
        <Card>
          <TodaysWeatherCardDate>
            {`Hoy · ${moment
              .unix(weather.dt)
              .local()
              .format("DD/MM/YYYY")}`}
          </TodaysWeatherCardDate>
          <TodaysWeatherCardWrapper>
            <TodaysWeatherCardLeft>
              <TodaysWeatherCardTitle>Ahora:</TodaysWeatherCardTitle>
              <TodaysWeatherCardWeather>
                {`${Math.ceil(weather.main.temp)}ºC`}
              </TodaysWeatherCardWeather>
            </TodaysWeatherCardLeft>
            <TodaysWeatherCardRight>
              <TodaysWeatherCardImage
                src={getWeatherImage(weather.weather[0].icon)}
              />
            </TodaysWeatherCardRight>
          </TodaysWeatherCardWrapper>
        </Card>
      )}
    </React.Fragment>
  );
};

export default TodaysWeatherCard;
