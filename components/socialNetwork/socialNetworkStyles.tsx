import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";

export const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialNetworkIconContainer = styled.div<{ icon: string }>`
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-reapeat: no-repeat;
  height: 30px;
  width: 30px;
`;

export const HandleContainer = styled.div``;
