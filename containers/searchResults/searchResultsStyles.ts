import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 70px;

  @media (min-width: 850px) {
    margin-top: 20px;
    margin-bottom: 0px;
    height: 55%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    margin-top: 0px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SearchResultContainer = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 95%;
  -webkit-box-shadow: 1px 25px 64px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 25px 64px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 25px 64px -16px rgba(0, 0, 0, 0.75);

  @media (min-width: 1200px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 95%;
  }

  @media (min-width: 1360px) {
    width: 90%;
  }

  @media (min-width: 1530px) {
    width: 80%;
  }
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

export const ReactPaginateContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 30px;
`;
