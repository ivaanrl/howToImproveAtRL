import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const SearchResultsContainer = styled.div`
  max-height: 550px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SearchResultContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
`;

export const SearchResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColor};
  padding-left: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SearchResultHeaderCategory = styled.p`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
`;

export const SearchResultHeaderSeparator = styled.div`
  height: 2px;
  width: 5px;
  background-color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  margin-right: 10px;
  margin-left: 10px;
`;

export const SearchResultHeaderName = styled.p`
  color: ${(props) => (props.theme as ThemeInterface).highlightTextColor};
`;

export const SearchResultBodyContainer = styled.div`
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorLighter};
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`;

export const ContentCreatorNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContentCreatorLabel = styled.p`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  padding-right: 10px;
  padding-left: 10px;
`;
export const ContentCreatorName = styled.p`
  color: ${(props) => (props.theme as ThemeInterface).highlightTextColor};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LinkButton = styled.button<{ active: boolean }>`
  border: none;
  border-radius: 6px;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).highlightTextColor};
  color: ${(props) => (props.theme as ThemeInterface).darkTextColor};
  font-weight: bold;
  font-size: 15px;
  height: 35px;
  width: 80%;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      (props.theme as ThemeInterface).hoverHighlightTextColor};
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    !props.active &&
    css`
      background-color: ${(props) =>
        (props.theme as ThemeInterface).highlightTextColorDisabled};
      color: grey;

      &:hover {
        background-color: ${(props) =>
          (props.theme as ThemeInterface).highlightTextColorDisabled};
        cursor: not-allowed;
      }
    `}
`;
