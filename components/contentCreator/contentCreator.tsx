import { useContext, useEffect, useState } from "react";
import { store, ContentCreator as ContentCreatorInterface } from "../../store";
import { useRouter } from "next/router";
import SocialNetwork from "../socialNetwork/socialNetwork";
import {
  ContentCreatorContainer,
  ContentCreatorHeader,
  TrainingPacksButton,
  MechanicsButton,
  TutorialsButton,
  ContentCreatorNameContainer,
  SocialNetworksContainer,
  ProfilePictureContainer,
  PictureAndNameContainer,
} from "./contentCreatorStyles";

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

  if (!currentContentCreator) return <div></div>;

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
          <ContentCreatorNameContainer> {name} </ContentCreatorNameContainer>
          <ProfilePictureContainer profilePicture={picture} />
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
      <ContentCreatorContainer></ContentCreatorContainer>
    </>
  );
};

export default ContentCreator;
