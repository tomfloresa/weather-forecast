import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 18px;
  box-shadow: ${props => props.theme.shadows.main};
  margin: 16px 0;
  padding: 8px 16px;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.main};
`;
