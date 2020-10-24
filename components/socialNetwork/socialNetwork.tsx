import { useState } from "react";
import {
  SocialNetworkContainer,
  SocialNetworkIconContainer,
  HandleContainer,
  PersonalWebsiteContainer,
} from "./socialNetworkStyles";

interface Props {
  socialNetwork:
    | "tiktok"
    | "youtube"
    | "twitter"
    | "steam"
    | "instagram"
    | "personal website"
    | "facebook"
    | "discord"
    | "twitch";
  showHandle: boolean;
  size: "small" | "big";
  handle: string;
}

const SocialNetwork = ({ socialNetwork, showHandle, handle, size }: Props) => {
  const [link, setLink] = useState<string>();
  const getIcon = () => {
    switch (socialNetwork) {
      case "tiktok":
        return "/images/socialIcons/tiktok_icon.png";
      case "youtube":
        return "/images/socialIcons/yt_icon.png";
      case "twitter":
        return "/images/socialIcons/twitter_icon.png";
      case "steam":
        return "/images/socialIcons/steam_icon.png";
      case "instagram":
        return "/images/socialIcons/ig_icon.png";
      case "facebook":
        return "/images/socialIcons/fb_icon.png";
      case "discord":
        return "/images/socialIcons/discord_icon.png";
      case "twitch":
        return "/images/socialIcons/twitch_icon.png";
    }
  };

  return (
    <a href={link} target="blank_">
      <SocialNetworkContainer>
        {socialNetwork === "personal website" ? (
          <PersonalWebsiteContainer>Personal Website</PersonalWebsiteContainer>
        ) : (
          <SocialNetworkIconContainer icon={getIcon()} />
        )}
      </SocialNetworkContainer>
    </a>
  );
};

export default SocialNetwork;
