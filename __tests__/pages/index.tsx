import React from 'react';
import { render } from '../../test/testsUtils';
import Home from '../../pages/index';
import faker from 'faker';
import { ContentCreator, TrainingPack } from '../../shared/interfaces';

const featuredTrainingPackCreators: {
  [contenCreatorName: string]: {
    contentCreatorInfo: ContentCreator;
    trainingPacks: TrainingPack[];
  };
} = {
  [faker.internet.userName()]: {
    contentCreatorInfo: {
      content_creator_id: faker.random.alphaNumeric(),
      tiktok: faker.internet.userName(),
      youtube: faker.internet.userName(),
      twitter: faker.internet.userName(),
      steam: faker.internet.userName(),
      instagram: faker.internet.userName(),
      personal_website: faker.internet.url(),
      facebook: faker.internet.userName(),
      discord: faker.internet.userName(),
      twitch: faker.internet.userName(),
      featured: 1,
      name: faker.internet.userName(),
      picture: faker.internet.url(),
    },
    trainingPacks: [],
  },
  [faker.internet.userName()]: {
    contentCreatorInfo: {
      content_creator_id: faker.random.alphaNumeric(),
      tiktok: faker.internet.userName(),
      youtube: faker.internet.userName(),
      twitter: faker.internet.userName(),
      steam: faker.internet.userName(),
      instagram: faker.internet.userName(),
      personal_website: faker.internet.url(),
      facebook: faker.internet.userName(),
      discord: faker.internet.userName(),
      twitch: faker.internet.userName(),
      featured: 1,
      name: faker.internet.userName(),
      picture: faker.internet.url(),
    },
    trainingPacks: [],
  },
  [faker.internet.userName()]: {
    contentCreatorInfo: {
      content_creator_id: faker.random.alphaNumeric(),
      tiktok: faker.internet.userName(),
      youtube: faker.internet.userName(),
      twitter: faker.internet.userName(),
      steam: faker.internet.userName(),
      instagram: faker.internet.userName(),
      personal_website: faker.internet.url(),
      facebook: faker.internet.userName(),
      discord: faker.internet.userName(),
      twitch: faker.internet.userName(),
      featured: 1,
      name: faker.internet.userName(),
      picture: faker.internet.url(),
    },
    trainingPacks: [],
  },
};

test('renders properly', () => {
  const {} = render(
    <Home featuredTrainingPackCreators={featuredTrainingPackCreators} />,
  );
});
