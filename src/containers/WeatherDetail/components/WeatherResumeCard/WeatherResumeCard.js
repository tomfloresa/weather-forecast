import React from "react";

// Components
import { Card } from "../../../../components";

// Utils
import { getWeatherImage } from "../../../../utils";

// Styles
import {
  WeatherResumeCardWrapper,
  WeatherResumeCardDate,
  WeatherResumeCardImageWrapper,
  WeatherResumeCardImage,
  WeatherResumeCardInfo,
  WeatherResumeCardInfoPane
} from "./WeatherResumeCard.styled";

const WeatherResumeCard = ({ resume }) => {
  return (
    <Card>
      <WeatherResumeCardWrapper>
        <WeatherResumeCardDate>{resume.date}</WeatherResumeCardDate>
        <WeatherResumeCardImageWrapper>
          <WeatherResumeCardImage src={getWeatherImage(resume.icon)} />
        </WeatherResumeCardImageWrapper>
        <WeatherResumeCardInfo>
          <WeatherResumeCardInfoPane>
            <span className="temperature">{`${Math.ceil(resume.min)}ºC`}</span>
            <span className="minOrMax">Min</span>
          </WeatherResumeCardInfoPane>
          <WeatherResumeCardInfoPane>
            <span className="temperature">{`${Math.ceil(resume.max)}ºC`}</span>
            <span className="minOrMax">Max</span>
          </WeatherResumeCardInfoPane>
        </WeatherResumeCardInfo>
      </WeatherResumeCardWrapper>
    </Card>
  );
};

export default WeatherResumeCard;
