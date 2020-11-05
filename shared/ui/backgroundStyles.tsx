import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const BackgroundDefault = styled.div`
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorDarkHighlight};
  height: 100%;
  max-height: 100%;
`;
