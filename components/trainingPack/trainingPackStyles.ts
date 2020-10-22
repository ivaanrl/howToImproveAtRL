import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";

export const TrainingPackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 30px;

  padding-bottom: 0px;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColor};
  border-radius: 10px;
  height: 30vh;
  max-width: 460px;

  @media (min-width: 800px) {
    width: 35%;
    max-width: 442px;
  }
`;

export const TrainingPackImageContainer = styled.div<{
  backgroundImage: string;
}>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-position: center top;
  width: 100%;
  height: 100%;
`;

export const TraningPackNameContaier = styled.div``;
