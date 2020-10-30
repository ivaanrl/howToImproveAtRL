import { render } from '../../../test/testsUtils';
import { TrainingPack } from '../../../shared/interfaces';
import faker from 'faker';
import TrainingPacks from '../trainingPacks';

const trainingPacksInfo: TrainingPack[] = [
  {
    training_pack_id: faker.random.number(),
    field_image: 'Mannfield',
    difficulty: faker.lorem.word(),
    training_pack_code: faker.random.alphaNumeric(16),
    training_style: '{ "Striker": true, "Redirects": true, "Rebounds": true }',
    training_pack_name: faker.lorem.words(5),
    name: faker.lorem.words(2),
    youtube_explanation: faker.internet.url(),
  },
  {
    training_pack_id: faker.random.number(),
    field_image: 'Mannfield',
    difficulty: faker.lorem.word(),
    training_pack_code: faker.random.alphaNumeric(16),
    training_style: '{ "Saves": true, "Defensive": true}',
    training_pack_name: faker.lorem.words(5),
    name: faker.lorem.words(2),
    youtube_explanation: faker.internet.url(),
  },
  {
    training_pack_id: faker.random.number(),
    field_image: 'Mannfield',
    difficulty: faker.lorem.word(),
    training_pack_code: faker.random.alphaNumeric(16),
    training_style: '{ "Striker": true, "Passing": true, "Freestyle": true }',
    training_pack_name: faker.lorem.words(5),
    name: faker.lorem.words(2),
    youtube_explanation: faker.internet.url(),
  },
];

test('renders properly', () => {
  const { getByRole } = render(
    <TrainingPacks trainingPacksInfo={trainingPacksInfo} />,
  );

  const TrainigPacksContainer = getByRole('training-packs-container');

  expect(TrainigPacksContainer).toBeInTheDocument();
  expect(TrainigPacksContainer.children.length).toBe(trainingPacksInfo.length);
});
