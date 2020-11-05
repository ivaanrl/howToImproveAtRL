import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import ContentCreator from '../contentCreator';
import faker from 'faker';
import {
  TrainingPack,
  Mechanic,
  Tutorial,
  ContentCreator as ContentCreatorInterface,
} from '../../../shared/interfaces';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {
      creatorName: 'ivanrl',
    },
  })),
}));

const mockCurrentContentCreator: {
  contentCreatorInfo: ContentCreatorInterface;
  trainingPacks: TrainingPack[];
  mechanics: Mechanic[];
  tutorials: Tutorial[];
} = {
  contentCreatorInfo: {
    content_creator_id: faker.random.number().toString(),
    tiktok: faker.name.firstName(),
    youtube: faker.name.firstName(),
    twitter: faker.name.firstName(),
    steam: faker.name.firstName(),
    instagram: faker.name.firstName(),
    personal_website: faker.internet.url(),
    facebook: faker.name.firstName(),
    discord: faker.internet.url(),
    twitch: faker.name.firstName(),
    featured: 1,
    name: faker.name.firstName(),
    picture: faker.internet.url(),
  },
  trainingPacks: [],
  mechanics: [],
  tutorials: [],
};

test('renders properly', async () => {
  const { getByTestId, findByTestId } = render(
    <ContentCreator currentContentCreator={mockCurrentContentCreator} />,
  );
  await findByTestId('content creator header');
  expect(getByTestId('content creator name')).toBeInTheDocument();
  const socialNetworksContainer = getByTestId('social networks container');
  expect(socialNetworksContainer.children.length).toBe(9);

  const bigButtonsContainer = getByTestId('big buttons container');
  expect(bigButtonsContainer.children.length).toBe(3);
});

test('selecting categories work', async () => {
  const { getByRole, findByTestId } = render(
    <ContentCreator currentContentCreator={mockCurrentContentCreator} />,
  );
  await findByTestId('content creator header');

  const trainingPackButton = getByRole('button', { name: 'Training Packs' });
  user.click(trainingPackButton);
  expect(getByRole('training-packs-container')).toBeInTheDocument();
});
