import { render } from '../../../test/testsUtils';
import SocialNetwork from '../socialNetwork';
import faker from 'faker';

test('renders properly', () => {
  const { getByAltText } = render(
    <SocialNetwork socialNetwork="tiktok" handle="ivanrl" />,
  );
  expect(getByAltText('tiktok-icon')).not.toBeNull();
});

describe('renders with correct social network', () => {
  test('tiktok', () => {
    const socialNetwork = 'tiktok';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://tiktok.com/@' + username,
    );
  });

  test('youtube', () => {
    const socialNetwork = 'youtube';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://youtube.com/c/' + username,
    );
  });

  test('twitter', () => {
    const socialNetwork = 'twitter';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://twitter.com/' + username,
    );
  });

  test('steam', () => {
    const socialNetwork = 'steam';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://steamcommunity.com/id/' + username,
    );
  });

  test('instagram', () => {
    const socialNetwork = 'instagram';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://instagram.com/' + username,
    );
  });

  test('discord', () => {
    const socialNetwork = 'discord';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://discord.gg/' + username,
    );
  });

  test('twitch', () => {
    const socialNetwork = 'twitch';
    const username = 'ivanrl';
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={username} />,
    );
    expect(getByAltText(socialNetwork + '-icon')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      'https://twitch.tv/' + username,
    );
  });

  test('personal website', () => {
    const socialNetwork = 'personal website';
    const website = faker.internet.url();
    const { getByAltText, getByTestId } = render(
      <SocialNetwork socialNetwork={socialNetwork} handle={website} />,
    );
    expect(getByTestId('personal-website')).not.toBeNull();
    expect(getByTestId('link-to-' + socialNetwork)).toHaveAttribute(
      'href',
      website,
    );
  });
});
