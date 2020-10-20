import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";
import { Dash } from "@styled-icons/bootstrap/Dash";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  width: 100%;
  height: 100%;
  box-shadow: 1;
  @media (min-width: 600px) {
    width: 35%;
  }

  @media (min-width: 1000px) {
    width: 25%;
  }

  @media (min-width: 1200px) {
    width: 18%;
  }
`;

export const SidebarItemContainer = styled.button<{ active: boolean }>`
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.theme as ThemeInterface).mutedTextColor};
  color: ${(props) => (props.theme as ThemeInterface).mutedTextColor};
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
      color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
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
`;

export const DashIcon = styled(Dash)`
  color: ${(props) => (props.theme as ThemeInterface).mutedTextColor};
  height: 40px;
  width: 40px;
  padding-right: 10px;
  position: absolute;
  top: calc(50% - 23px);
  right: 0;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  height: 40px;
  width: 40px;
  padding-right: 10px;
  position: absolute;
  top: calc(50% - 23px);
  right: 0;
  display: inline-block;
`;
