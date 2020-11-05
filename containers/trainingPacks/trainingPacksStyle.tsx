import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const TrainingPacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorDarkHighlight};
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
