import { useState } from "react";
import { usePopper } from "react-popper";
import {
  SignedInButton,
  ProfilePictureContainer,
  ChevronDownIcon,
  NavbarSignedInButtonContainer,
  NavbarPopperContainer,
  NavbarPopperItem,
} from "./navbarStyles";
import OutsideAlerter from "../../shared/modules/OutsideAlerter";
import { signOut, useSession } from "next-auth/client";

const NavbarPopper = () => {
  const [session, loading] = useSession();
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [popoverOpen, setPopOverOpen] = useState<boolean>(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  const togglePopover = () => {
    setPopOverOpen(!popoverOpen);
  };

  return (
    <NavbarSignedInButtonContainer>
      <SignedInButton
        ref={setReferenceElement}
        onClick={togglePopover}
        className="prevent-reopen-user-navbar"
      >
        <ProfilePictureContainer
          image={session.user.image}
          className="prevent-reopen-user-navbar"
        />
        {session.user.name.split(" ")[0]}{" "}
        <ChevronDownIcon className="prevent-reopen-user-navbar" />
      </SignedInButton>
      {popoverOpen ? (
        <OutsideAlerter
          setPopoverOpen={setPopOverOpen}
          notCloseClass="prevent-reopen-user-navbar"
        >
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="prevent-reopen-user-navbar"
          >
            <NavbarPopperContainer>
              <NavbarPopperItem>My Favorites</NavbarPopperItem>
              <NavbarPopperItem>My uploads</NavbarPopperItem>
              <NavbarPopperItem>My Favorites</NavbarPopperItem>
              <NavbarPopperItem onClick={() => signOut()}>
                Sign Out
              </NavbarPopperItem>
            </NavbarPopperContainer>
          </div>
        </OutsideAlerter>
      ) : null}
    </NavbarSignedInButtonContainer>
  );
};

export default NavbarPopper;
