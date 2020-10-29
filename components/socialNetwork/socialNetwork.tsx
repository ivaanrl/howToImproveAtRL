import { useEffect, useState } from 'react';
import {
  SocialNetworkContainer,
  SocialNetworkIconContainer,
  PersonalWebsiteContainer,
} from './socialNetworkStyles';
import Image from 'next/image';

interface Props {
  socialNetwork:
    | 'tiktok'
    | 'youtube'
    | 'twitter'
    | 'steam'
    | 'instagram'
    | 'personal website'
    | 'facebook'
    | 'discord'
    | 'twitch';
  handle: string;
}

const SocialNetwork = ({ socialNetwork, handle }: Props) => {
  const [icon, setIcon] = useState<string>();
  const [link, setLink] = useState<string>();

  const setIconAndLink = () => {
    switch (socialNetwork) {
      case 'tiktok':
        setLink('https://tiktok.com/@' + handle);
        setIcon('/images/socialIcons/tiktok_icon.png');
        break;
      case 'youtube':
        setLink('https://youtube.com/c/' + handle);
        setIcon('/images/socialIcons/yt_icon.png');
        break;
      case 'twitter':
        setLink('https://twitter.com/' + handle);
        setIcon('/images/socialIcons/twitter_icon.png');
        break;
      case 'steam':
        setLink('https://steamcommunity.com/id/' + handle);
        setIcon('/images/socialIcons/steam_icon.png');
        break;
      case 'instagram':
        setLink('https://instagram.com/' + handle);
        setIcon('/images/socialIcons/ig_icon.png');
        break;
      case 'facebook':
        setIcon('/images/socialIcons/fb_icon.png');
        break;
      case 'discord':
        setLink('https://discord.gg/' + handle);
        setIcon('/images/socialIcons/discord_icon.png');
        break;
      case 'twitch':
        setLink('https://twitch.tv/' + handle);
        setIcon('/images/socialIcons/twitch_icon.png');
        break;
      case 'personal website':
        setLink(handle);
    }
  };

  useEffect(() => {
    setIconAndLink();
  }, [icon, link]);

  return (
    <a href={link} target="blank_" data-testid={`link-to-${socialNetwork}`}>
      <SocialNetworkContainer>
        {socialNetwork === 'personal website' ? (
          <PersonalWebsiteContainer data-testid="personal-website">
            Personal Website
          </PersonalWebsiteContainer>
        ) : icon ? (
          <SocialNetworkIconContainer>
            <Image
              src={icon}
              width={20}
              height={20}
              alt={`${socialNetwork}-icon`}
            />
          </SocialNetworkIconContainer>
        ) : null}
      </SocialNetworkContainer>
    </a>
  );
};

export default SocialNetwork;
