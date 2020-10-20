import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";
import { Dash } from "@styled-icons/bootstrap/Dash";

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
  border-bottom: 1px solid rgba(120, 120, 120, 0.9);
  color: grey;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 18px;
  }
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    `};
`;

export const DashIcon = styled(Dash)`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  height: 40px;
`;
