import { useContext, useEffect, useState } from "react";
import { store, ContentCreator as ContentCreatorInterface } from "../../store";
import { useRouter } from "next/router";
import SocialNetwork from "../socialNetwork/socialNetwork";
import {
  ContentCreatorContainer,
  ContentCreatorHeader,
  ProfileBigButton,
  ContentCreatorNameContainer,
  SocialNetworksContainer,
  ProfilePictureContainer,
  PictureAndNameContainer,
  ProfileBigButtonText,
} from "./contentCreatorStyles";
import { useMeasure } from "react-use";
import { useSpring, animated } from "react-spring";

const NUMBER_OF_IMAGES = 5;

const ContentCreator = () => {
  const { state } = useContext(store);
  const router = useRouter();
  const [
    currentContentCreator,
    setCurrentContentCreator,
  ] = useState<ContentCreatorInterface | null>(null);
  const [headerImage, setHeaderImage] = useState<string>("");

  const getRandomHeaderImage = () => {
    const rndNmbr = Math.floor(Math.random() * NUMBER_OF_IMAGES + 1);

    if (rndNmbr === 1) {
      return "/images/profileHeader/rl.jpeg";
    } else {
      return `/images/profileHeader/rl${rndNmbr}.jpg`;
    }
  };

  useEffect(() => {
    if (
      state.featuredTrainingPackCreators[router.query.creatorName as string]
    ) {
      setHeaderImage(getRandomHeaderImage());
      setCurrentContentCreator(
        state.featuredTrainingPackCreators[router.query.creatorName as string]
          .contentCreatorInfo
      );
    }
  }, [router.query.creatorName, state.featuredTrainingPackCreators]);

  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const [ref, { height }] = useMeasure();

  const [buttonsSpringProps, setButtonsSpringProps] = useSpring(() => ({
    from: {
      display: "flex",
    },
    flexDirection: "column" as "column", //don't even ask, idk why ts does this
    height: "100%",
  }));

  const [profilePictureSpringProps, setProfilePictureSpringProps] = useSpring(
    () => ({
      from: {
        position: "absolute" as "absolute",
      },
      marginTop: "40px",
      height: "150px",
      width: "150px",
    })
  );

  const [profileNameSpringProps, setProfileNameSpringProps] = useSpring(() => ({
    fontSize: "25px",
  }));

  if (!currentContentCreator) return <div></div>;

  const handleBigButtonClick = (category: string) => {
    if (!isNavbar) setIsNavbar(true);
    setButtonsSpringProps({ height: "5%", flexDirection: "row" });
    setProfilePictureSpringProps({
      height: "80px",
      width: "80px",
      marginTop: "30px",
    });
    setProfileNameSpringProps({ fontSize: "18px" });
  };

  const {
    name,
    picture,
    tiktok,
    youtube,
    twitter,
    steam,
    instagram,
    personal_website,
    facebook,
    discord,
    twitch,
  } = currentContentCreator;

  return (
    <>
      <ContentCreatorHeader backgroundImage={headerImage}>
        <PictureAndNameContainer>
          <animated.div style={profileNameSpringProps}>
            <ContentCreatorNameContainer> {name} </ContentCreatorNameContainer>
          </animated.div>
          <animated.div style={profilePictureSpringProps}>
            <ProfilePictureContainer profilePicture={picture} />
          </animated.div>
        </PictureAndNameContainer>
        <SocialNetworksContainer>
          {tiktok ? (
            <SocialNetwork
              socialNetwork="tiktok"
              showHandle={true}
              size="big"
              handle={tiktok}
            />
          ) : null}
          {youtube ? (
            <SocialNetwork
              socialNetwork="youtube"
              showHandle={true}
              size="big"
              handle={youtube}
            />
          ) : null}
          {twitter ? (
            <SocialNetwork
              socialNetwork="twitter"
              showHandle={true}
              size="big"
              handle={twitter}
            />
          ) : null}
          {steam ? (
            <SocialNetwork
              socialNetwork="steam"
              showHandle={true}
              size="big"
              handle={steam}
            />
          ) : null}
          {instagram ? (
            <SocialNetwork
              socialNetwork="instagram"
              showHandle={true}
              size="big"
              handle={instagram}
            />
          ) : null}

          {facebook ? (
            <SocialNetwork
              socialNetwork="facebook"
              showHandle={true}
              size="big"
              handle={facebook}
            />
          ) : null}
          {discord ? (
            <SocialNetwork
              socialNetwork="discord"
              showHandle={true}
              size="big"
              handle={discord}
            />
          ) : null}
          {twitch ? (
            <SocialNetwork
              socialNetwork="twitch"
              showHandle={true}
              size="big"
              handle={twitch}
            />
          ) : null}
          {personal_website ? (
            <SocialNetwork
              socialNetwork="personal website"
              showHandle={true}
              size="big"
              handle={personal_website}
            />
          ) : null}
        </SocialNetworksContainer>
      </ContentCreatorHeader>
      <animated.div style={buttonsSpringProps} ref={ref}>
        <ProfileBigButton
          backgroundImage="/images/profileButtons/training.jpg"
          onClick={() => handleBigButtonClick("training")}
          isNavbar={isNavbar}
        >
          <ProfileBigButtonText isNavbar={isNavbar}>
            Training Packs
          </ProfileBigButtonText>
        </ProfileBigButton>
        <ProfileBigButton
          backgroundImage="/images/profileButtons/tutorials.jpg"
          onClick={() => handleBigButtonClick("tutorials")}
          isNavbar={isNavbar}
        >
          <ProfileBigButtonText isNavbar={isNavbar}>
            Tutorials
          </ProfileBigButtonText>
        </ProfileBigButton>
        <ProfileBigButton
          backgroundImage="/images/profileButtons/mechanics.jpg"
          onClick={() => handleBigButtonClick("mechanics")}
          isNavbar={isNavbar}
        >
          <ProfileBigButtonText isNavbar={isNavbar}>
            Mechanics
          </ProfileBigButtonText>
        </ProfileBigButton>
      </animated.div>
    </>
  );
};

export default ContentCreator;
