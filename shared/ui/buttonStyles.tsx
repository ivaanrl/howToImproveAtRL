import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const FilterSearchButton = styled.button`
  flex-basis: 92%;
  margin-bottom: 10px;
  order: 1;

  @media (min-width: 705px) {
    order: 0;
    flex-basis: 43%;
    margin-bottom: 0px;
  }

  box-sizing: content-box;
  border: none;
  height: 35px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 17px;
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
