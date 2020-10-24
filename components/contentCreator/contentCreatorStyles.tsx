import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";
import { SocialNetworkContainer } from "../socialNetwork/socialNetworkStyles";

export const ContentCreatorContainer = styled.div``;

export const TrainingPacksButton = styled.div``;

export const MechanicsButton = styled.div``;

export const TutorialsButton = styled.div``;

export const ContentCreatorHeader = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).profileHeaderColorOP1};
  background-image: linear-gradient(
      to left,
      ${(props) => (props.theme as ThemeInterface).profileHeaderColorOP0} 0%,
      ${(props) => (props.theme as ThemeInterface).profileHeaderColorOP0} 10%,
      ${(props) => (props.theme as ThemeInterface).profileHeaderColorOP1} 70%
    ),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: right;
  border-bottom: 7px solid
    ${(props) => (props.theme as ThemeInterface).profilePictureBorderColor};
`;

export const PictureAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: 40px;
  margin-right: 100px;
  @media (min-width: 370px) {
    margin-left: 70px;
  }

  @media (min-width: 460px) {
    margin-left: 100px;
  }
`;

export const ProfilePictureContainer = styled.div<{ profilePicture: string }>`
  background-image: url(${(props) => props.profilePicture});
  background-size: cover;
  border-radius: 100%;
  border: 5px solid
    ${(props) => (props.theme as ThemeInterface).profilePictureBorderColor};
  height: 150px;
  width: 150px;
  position: absolute;
  margin-top: 40px;
`;

export const ContentCreatorNameContainer = styled.div`
  margin-bottom: 100px;
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
`;

export const SocialNetworksContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  left: 60%;
  max-width: 120px;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorDarkHighlight};

  @media (min-width: 370px) {
    left: 65%;
  }

  @media (min-width: 460px) {
    max-width: none;
    left: 70%;
  }

  @media (min-width: 580px) {
    left: 55%;
  }

  @media (min-width: 650px) {
    left: 60%;
  }

  @media (min-width: 750px) {
    left: 65%;
  }

  @media (min-width: 900px) {
    left: 70%;
  }

  @media (min-width: 1050px) {
    left: 75%;
  }

  @media (min-width: 1300px) {
    left: 80%;
  }

  @media (min-width: 1700px) {
    left: 85%;
  }
`;
