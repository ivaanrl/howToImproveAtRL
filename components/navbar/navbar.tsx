import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Sidebar from "../sidebar/sidebar";
import NavbarPopper from "./navbarPopper";
import {
  NavbarContainer,
  MenuOpenIcon,
  MenuButtonContainer,
  SignInWithGoogleButton,
  SignedInButton,
  ProfilePictureContainer,
  ChevronDownIcon,
} from "./navbarStyles";
import useWindowDimensions from "../../shared/customHooks/useWindowsDimensions";
import { signIn, useSession } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

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
      transform: "rotate(180deg)",
    },
    opacity: 1,
  }));
  const [navbarSpringProps, setNavbarSpringProps] = useSpring(() => ({
    from: {
      position: "absolute" as any,
      top: 0,
      bottom: 0,
    },
    transform: "translateX(-200px)",
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

      setNavbarSpringProps({ transform: "translateX(0px)" });
    }
    setSidebarOpen(!sidebarOpen);
  };

  const handleSteamAuth = () => {
    signIn("google");
  };

  console.log(session);

  return (
    <div>
      <NavbarContainer>
        <MenuButtonContainer onClick={handleMenuClick}>
          <animated.div style={menuButtonSpringProps}>
            <MenuOpenIcon />
          </animated.div>
        </MenuButtonContainer>

        {session ? (
          <NavbarPopper />
        ) : (
          <SignInWithGoogleButton onClick={handleSteamAuth}>
            {" "}
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
