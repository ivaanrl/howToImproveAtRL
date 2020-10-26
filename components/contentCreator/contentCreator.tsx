import { useContext, useEffect, useState } from "react";
import {
  store,
  ContentCreator as ContentCreatorInterface,
  TrainingPack,
} from "../../store";
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
import { useSpring, animated, useTransition } from "react-spring";
import useWindowDimensions from "../../shared/customHooks/useWindowsDimensions";
import TrainingPacks from "../trainingPacks/trainingPacks";

const NUMBER_OF_IMAGES = 5;

const pages = [
  ({
    style,
    trainingPacksInfo,
  }: {
    trainingPacksInfo: TrainingPack[];
    style: any;
  }) => <animated.div style={{ ...style }}> </animated.div>,
  ({
    style,
    trainingPacksInfo,
  }: {
    trainingPacksInfo: TrainingPack[];
    style: any;
  }) => (
    <animated.div style={{ ...style }}>
      <TrainingPacks trainingPacksInfo={trainingPacksInfo} />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  ),
];

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
  const { width } = useWindowDimensions();

  const [buttonsSpringProps, setButtonsSpringProps] = useSpring(() => ({
    from: {
      display: "flex",
    },
    flexDirection: width < 1300 ? ("column" as "column") : ("row" as "row"), //don't even ask, idk why ts does this
    height: "100%",
    minHeight: "0px",
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

  const [page, setPage] = useState<0 | 1 | 2 | 3>(0);

  const transitions = useTransition(page, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  if (!currentContentCreator) return <div></div>;

  const handleBigButtonClick = (categorySelected: 1 | 2 | 3) => {
    if (!isNavbar) setIsNavbar(true);
    setPage(categorySelected);
    setButtonsSpringProps({
      height: "5%",
      minHeight: "40px",
      flexDirection: "row",
    });
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
      <div style={{ height: "100%" }}>
        <animated.div style={buttonsSpringProps}>
          <ProfileBigButton
            backgroundImage="/images/profileButtons/training.jpg"
            onClick={() => handleBigButtonClick(1)}
            isNavbar={isNavbar}
          >
            <ProfileBigButtonText isNavbar={isNavbar}>
              Training Packs
            </ProfileBigButtonText>
          </ProfileBigButton>
          <ProfileBigButton
            backgroundImage="/images/profileButtons/tutorials.jpg"
            onClick={() => handleBigButtonClick(2)}
            isNavbar={isNavbar}
          >
            <ProfileBigButtonText isNavbar={isNavbar}>
              Tutorials
            </ProfileBigButtonText>
          </ProfileBigButton>
          <ProfileBigButton
            backgroundImage="/images/profileButtons/mechanics.jpg"
            onClick={() => handleBigButtonClick(3)}
            isNavbar={isNavbar}
          >
            <ProfileBigButtonText isNavbar={isNavbar}>
              Mechanics
            </ProfileBigButtonText>
          </ProfileBigButton>
        </animated.div>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return (
            <Page
              key={key}
              style={props}
              trainingPacksInfo={
                state.featuredTrainingPackCreators[
                  router.query.creatorName as string
                ].trainingPacks
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ContentCreator;
