import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import Sidebar from '../sidebar/sidebar';
import NavbarPopper from './navbarPopper';
import {
  NavbarContainer,
  MenuOpenIcon,
  MenuButtonContainer,
  SignInWithGoogleButton,
  NavbarSearchBarContainer,
  NavbarSearchBarInput,
  SearchIcon,
} from './navbarStyles';
import useWindowDimensions from '../../shared/customHooks/useWindowsDimensions';
import { signIn, useSession } from 'next-auth/client';

const Navbar = () => {
  const router = useRouter();
  const [session] = useSession();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const [search, setSearch] = useState<string>('');

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: { name: search, searchType: 'any' },
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getSidebarWidth = () => {
    if (width < 600) {
      return width;
    } else if (width < 1000) {
      return width * 0.35;
    } else if (width < 1200) {
      return width * 0.25;
    } else {
      return width * 0.18;
    }
  };

  const [menuButtonSpringProps, setMenuButtonSpringProps] = useSpring(() => ({
    from: {
      transform: 'rotate(180deg)',
    },
    opacity: 1,
  }));
  const [navbarSpringProps, setNavbarSpringProps] = useSpring(() => ({
    from: {
      position: 'fixed' as 'fixed',
      top: 0,
      bottom: 0,
      zIndex: 2000,
    },
    transform: 'translateX(-200px)',
    width: `${getSidebarWidth()}px`,
  }));

  useEffect(() => {
    setNavbarSpringProps({ width: `${getSidebarWidth()}px` });
  }, [width]);

  const handleMenuClick = () => {
    if (sidebarOpen) {
      setMenuButtonSpringProps({ opacity: 1 });
      if (width < 600) {
        setNavbarSpringProps({ transform: `translateX(-${width}px)` });
      } else if (width < 1000) {
        setNavbarSpringProps({ transform: `translateX(-${width * 0.35}px)` });
      } else if (width < 1200) {
        setNavbarSpringProps({ transform: `translateX(-${width * 0.25}px)` });
      } else {
        setNavbarSpringProps({ transform: `translateX(-${width * 0.18}px)` });
      }
    } else {
      setMenuButtonSpringProps({ opacity: 0 });

      setNavbarSpringProps({ transform: 'translateX(0px)' });
    }
    setSidebarOpen(!sidebarOpen);
  };

  const handleSteamAuth = () => {
    signIn('google');
  };

  return (
    <div>
      <NavbarContainer data-testid="navbar container">
        <MenuButtonContainer
          aria-label="open sidebar button"
          onClick={handleMenuClick}
        >
          <animated.div style={menuButtonSpringProps}>
            <MenuOpenIcon />
          </animated.div>
        </MenuButtonContainer>

        <NavbarSearchBarContainer>
          <NavbarSearchBarInput
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
            onKeyPress={handleSearchKeyPress}
          />
          <SearchIcon aria-label="search button" onClick={handleSearch} />
        </NavbarSearchBarContainer>

        {session ? (
          <NavbarPopper />
        ) : (
          <SignInWithGoogleButton
            onClick={handleSteamAuth}
            data-testid="sign in with google"
          >
            {' '}
            Sign in with Google
          </SignInWithGoogleButton>
        )}
      </NavbarContainer>

      <animated.div style={navbarSpringProps}>
        <Sidebar closeSidebar={handleMenuClick} />
      </animated.div>
    </div>
  );
};

export default Navbar;
