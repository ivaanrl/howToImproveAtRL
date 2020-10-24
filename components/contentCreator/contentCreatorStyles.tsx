import styled, { css } from "styled-components";
import { ThemeInterface } from "../../styles/theme";

export const ContentCreatorContainer = styled.div``;

export const TrainingPacksButton = styled.div``;

export const MechanicsButton = styled.div``;

export const TutorialsButton = styled.div``;

export const ContentCreatorHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PictureAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePictureContainer = styled.div<{ profilePicture: string }>`
  background-image: url(${(props) => props.profilePicture});
  background-size: cover;
  border-radius: 100%;
  border: 2px solid white;
  height: 130px;
  width: 130px;
`;

export const ContentCreatorNameContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const SocialNetworksContainer = styled.div``;
