import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const FilterSearchButton = styled.button`
  box-sizing: content-box;
  flex-basis: 44%;
  border: none;
  height: 35px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).highlightTextColor};
  color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
