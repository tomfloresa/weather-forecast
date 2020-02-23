import styled from "styled-components";
import { rem } from "polished";

export const WeatherDetailWrapper = styled.div`
  height: 100%;
  max-width: 560px;
  padding: ${rem("24px")};
  background-color: #eff6ff;
  box-sizing: border-box;
  margin: auto;
  overflow: hidden;
`;

export const WeatherDetailGraphWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

export const WeatherDetailNoData = styled.div`
  text-align: center;

  h2 {
    font-weight: 800;
  }

  p {
    font-size: ${rem("32px")};
  }
`;
