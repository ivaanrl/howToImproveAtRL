import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

export const SidebarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  width: 100%;
  height: 100%;
  box-shadow: 1;
  /*@media (min-width: 600px) {
    width: 35%;
  }

  @media (min-width: 1000px) {
    width: 25%;
  }

  @media (min-width: 1200px) {
    width: 18%;
  }*/
`;

export const SidebarItemContainer = styled.button<{ active: boolean }>`
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.theme as ThemeInterface).mainTextColor};
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  p {
    font-size: 18px;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => (props.theme as ThemeInterface).highlightTextColor};
      border-bottom: 1px solid
        ${(props) => (props.theme as ThemeInterface).highlightTextColor};
    `};
`;

export const SidebarOptionContainer = styled.div`
  padding: 13px;
  width: 100%;
  text-decoration: none;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  &:hover {
    cursor: pointer;
  }
  a {
    padding-left: 20px;
    font-weight: bold;
    color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      (props.theme as ThemeInterface).bgColorDarkHighlight};
  }
`;

export const ChevronDownIcon = styled(ChevronDown)<{ active: boolean }>`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  height: 40px;
  width: 40px;
  padding-right: 10px;
  position: absolute;
  top: calc(50% - 23px);
  right: 0;
  display: inline-block;

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => (props.theme as ThemeInterface).highlightTextColor};
    `};
`;

export const SidebarButtonContainer = styled.div`
  background-color: ${(props) => (props.theme as ThemeInterface).bgColor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
`;
