import styled from "styled-components";
import { rem } from "polished";

export const ForecastWrapper = styled.div`
  height: 100%;
  max-width: 560px;
  padding: ${rem("24px")};
  background-color: #eff6ff;
  box-sizing: border-box;
  margin: auto;
  overflow: hidden;
`;

export const ForecastSliderWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
`;
