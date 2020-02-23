import styled from "styled-components";
import { rem } from "polished";

export const WeatherResumeCardWrapper = styled.div``;

export const WeatherResumeCardDate = styled.span`
  font-size: ${rem("24px")};
  font-weight: 800;
  text-align: center;
  display: block;
`;

export const WeatherResumeCardImageWrapper = styled.div``;

export const WeatherResumeCardImage = styled.img`
  display: block;
  margin: auto;
`;

export const WeatherResumeCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeatherResumeCardInfoPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;

  .temperature {
    font-size: ${rem("24px")};
    font-weight: 800;
  }
`;
