import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 900px;
  margin: auto;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColor};
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 25px 78px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 25px 78px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 25px 78px -8px rgba(0, 0, 0, 0.75);
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 95%;
  margin: auto;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  @media (min-width: 705px) {
    margin: 0;
    flex-basis: 50%;
  }
`;

export const SelectLabel = styled.label`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  margin-bottom: 5px;
`;
