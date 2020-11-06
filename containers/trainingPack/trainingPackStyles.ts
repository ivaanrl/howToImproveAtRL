import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import { ClipboardCopy } from '@styled-icons/heroicons-solid/ClipboardCopy';

export const TrainingPackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  padding-bottom: 0px;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColor};
  border-radius: 10px;
  height: 30vh;
  max-width: 337px;
  overflow: hidden;

  @media (min-width: 800px) {
    width: 35%;
    //max-width: 442px;
  }
`;

export const TrainingPackImageContainer = styled.div<{
  backgroundImage: string;
}>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-position: center top;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  position: relative;
  display: flex;
`;

export const TraningPackNameContaier = styled.div`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  background-color: rgba(55, 55, 55, 0.6);
  margin-top: 10px;
  border-radius: 4px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const TrainingPackCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  border-radius: 10px;
  padding: 4px;
  padding-right: 0px;
  height: 30px;
`;

export const TrainingPackCodeTextContainer = styled.textarea`
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  margin-right: 10px;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  border: none;
  height: 20px;
  resize: none;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const TrainingPackCodeIconContainer = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorDarkHighlight};
  height: 30px;
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  }
`;

export const ClipboardCopyIcon = styled(ClipboardCopy)`
  height: 20px;
  width: 20px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
`;

export const TrainingPackCategoriesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TrainingPackCategoryContainer = styled.button<{
  defensive: boolean;
  offensive: boolean;
  support: boolean;
}>`
  border: none;
  padding: 5px;
  margin-right: 10px;
  border-radius: 10px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.defensive &&
    css`
      background-color: ${(props) =>
        (props.theme as ThemeInterface).defensiveColor};

      &:hover {
        background-color: ${(props) =>
          (props.theme as ThemeInterface).defensiveHoverColor};
      }
    `}
  ${(props) =>
    props.offensive &&
    css`
      background-color: ${(props) =>
        (props.theme as ThemeInterface).offensiveColor};
      &:hover {
        background-color: ${(props) =>
          (props.theme as ThemeInterface).offensiveHoverColor};
      }
    `}
    ${(props) =>
    props.support &&
    css`
      background-color: ${(props) =>
        (props.theme as ThemeInterface).supportColor};
      &:hover {
        background-color: ${(props) =>
          (props.theme as ThemeInterface).supportHoverColor};
      }
    `};
`;

export const ImageCodeSpacer = styled.div`
  height: 15px;
`;
