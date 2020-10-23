import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";

export const TrainingPacksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
