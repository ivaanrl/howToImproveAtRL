import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import { Search } from '@styled-icons/evil/Search';

export const SearchBarContainer = styled.div`
  background-color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  border-radius: 5px;
  cursor: pointer;
`;

export const SearchBarInput = styled.input`
  padding: 10px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex: 1;

  &:focus {
    outline: none;
  }

  &:active {
  }
`;

export const SearchBarIcon = styled(Search)`
  height: 30px;
  width: 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: black;
  background-color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
`;
