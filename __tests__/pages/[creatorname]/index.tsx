import React from 'react';
import { render } from '../../../test/testsUtils';
import ContentCreatorPage from '../../../pages/[creatorName]/index';
import faker from 'faker';
import {
  ContentCreator,
  TrainingPack,
  Mechanic,
  Tutorial,
} from '../../../shared/interfaces';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {
      creatorName: 'ivanrl',
    },
  })),
}));

const featuredTrainingPackCreators: {
  [contenCreatorName: string]: {
    contentCreatorInfo: ContentCreator;
    trainingPacks: TrainingPack[];
    mechanics: Mechanic[];
    tutorials: Tutorial[];
  };
} = {
  ['ivanrl']: {
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
    mechanics: [],
    tutorials: [],
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
    mechanics: [],
    tutorials: [],
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
    mechanics: [],
    tutorials: [],
  },
};

test('renders properly', () => {
  const { getByTestId } = render(
    <ContentCreatorPage
      featuredTrainingPackCreators={featuredTrainingPackCreators}
    />,
  );

  expect(getByTestId('content creator name')).toBeInTheDocument();
});
