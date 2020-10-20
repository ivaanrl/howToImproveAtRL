import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";
import { MenuOpen } from "@styled-icons/material/MenuOpen";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  height: 40px;
`;

export const MenuButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active: {
    outline: none;
  }
`;

export const MenuOpenIcon = styled(MenuOpen)`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  height: 40px;
  width: 40px;
`;
