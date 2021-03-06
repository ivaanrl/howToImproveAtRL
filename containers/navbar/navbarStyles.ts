import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import { MenuOpen } from '@styled-icons/material/MenuOpen';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';
import { Search } from '@styled-icons/evil/Search';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.theme as ThemeInterface).bgColor};
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1800;
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

export const SignedInButton = styled.button`
  background-color: ${(props) =>
    (props.theme as ThemeInterface).bgColorDarkHighlight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;
  box-sizing: content-box;

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 ${(props) => (props.theme as ThemeInterface).highlightTextColor},
      0 2px 4px ${(props) => (props.theme as ThemeInterface).highlightTextColor},
      0 0 0 1px ${(props) => (props.theme as ThemeInterface).highlightTextColor};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProfilePictureContainer = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 22px;
  width: 22px;
  margin-right: 10px;
  border-radius: 4px;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  margin-left: 10px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  height: 20px;
  width: 20px;
  display: inline-block;
`;

//modified version of https://codepen.io/mupkoo/pen/YgddgB
export const SignInWithGoogleButton = styled.button`
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 8px 12px 8px 38px;
  margin-right: 20px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const NavbarSignedInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarPopperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
`;

export const NavbarPopperItem = styled.button`
  border: none;
  width: 100%;
  padding: 15px;
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      (props.theme as ThemeInterface).bgColorDarkHighlight};
  }

  &:active {
    outline: none;
    color: ${(props) => (props.theme as ThemeInterface).highlightTextColor};
  }

  &:focus {
    outline: none;
  }
`;

export const NavbarSearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  max-width: 550px;
  justify-content: center;
`;

export const NavbarSearchBarInput = styled.input`
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: none;
  padding-left: 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(Search)`
  height: 30px;
  width: 30px;
  color: ${(props) => (props.theme as ThemeInterface).mainTextColor};
  background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      (props.theme as ThemeInterface).bgColorDarkHighlight};
  }
`;
