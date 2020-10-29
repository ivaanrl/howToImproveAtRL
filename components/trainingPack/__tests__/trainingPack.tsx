import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { TrainingPack } from '../../../shared/interfaces';
import faker from 'faker';
import FeaturedTrainingPack from '../featuredTrainingPack';

const trainingPackInfo: TrainingPack = {
  training_pack_id: faker.random.number(),
  field_image: 'Mannfield',
  difficulty: faker.lorem.word(),
  training_pack_code: faker.random.alphaNumeric(16),
  training_style: '{ "Striker": true, "Defensive": true, "Passing": true }',
  training_pack_name: faker.lorem.words(10),
  name: faker.lorem.words(2),
  youtube_explanation: faker.internet.url(),
};

const mockExcecCommand = jest.fn();
global.document.execCommand = mockExcecCommand;

afterEach(() => {
  jest.useRealTimers();
});

test('renders properly', () => {
  const { getByRole, getAllByRole, getByText, findByText } = render(
    <FeaturedTrainingPack trainingPackInfo={trainingPackInfo} />,
  );
  expect(getByRole('container')).not.toBe(null);
  expect(getByText(trainingPackInfo.training_pack_name)).not.toBe(null);
  expect(getByText(trainingPackInfo.training_pack_code)).not.toBe(null);
  expect(getAllByRole('button').length).toBe(4); //1 clipboard icon, 3 categories buttons
});

test('Copies training pack code to clipboard', async () => {
  jest.useFakeTimers();
  const { getByTestId, getByText } = render(
    <FeaturedTrainingPack trainingPackInfo={trainingPackInfo} />,
  );

  const clipboardButton = getByTestId('clipboard button');
  user.click(clipboardButton);
  await waitFor(() => getByText(/Copied*/i));
  expect(mockExcecCommand).toHaveBeenCalledTimes(1);
  await waitFor(() =>
    expect(getByText(trainingPackInfo.training_pack_code)).toBeInTheDocument(),
  );
});
