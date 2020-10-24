import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";

export const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  }
`;

export const SocialNetworkIconContainer = styled.div<{ icon: string }>`
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-reapeat: no-repeat;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  margin-right: 10px;
  align-self: center;
`;

export const HandleContainer = styled.div`
  margin-right: 20px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
`;

export const PersonalWebsiteContainer = styled.div`
  font-size: 14px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  width: 120px;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
