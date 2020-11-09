import { render } from '../../../../test/testsUtils';
import faker from 'faker';
import user from '@testing-library/user-event';
import { TrainingPack } from '../../../../shared/interfaces';
import TrainingPackSearchResult from '../trainingPackSearchResult';

const trainingPackInfo: TrainingPack = {
  training_pack_id: faker.random.number(),
  field_image: 'Wasteland',
  difficulty: faker.lorem.word(),
  training_pack_code: faker.random.alphaNumeric(16),
  training_style: '{ "Striker": true, "Offense": true }',
  training_pack_name: faker.lorem.words(4),
  name: faker.name.firstName(),
  youtube_explanation: faker.internet.url(),
};

const mockWindowOpen = jest.fn();

window.open = mockWindowOpen;

test('renders properly', () => {
  const { getByText } = render(
    <TrainingPackSearchResult trainingPackInfo={trainingPackInfo} />,
  );
  expect(getByText(trainingPackInfo.training_pack_name)).toBeInTheDocument();
  expect(getByText(trainingPackInfo.name)).toBeInTheDocument();
  expect(getByText(trainingPackInfo.training_pack_code)).toBeInTheDocument();
  const training_styles_json = JSON.parse(
    trainingPackInfo.training_style as string,
  );

  for (let key in training_styles_json) {
    expect(getByText(key)).toBeInTheDocument();
  }
});

test('opens new window on explanation click', () => {
  const { getByRole } = render(
    <TrainingPackSearchResult trainingPackInfo={trainingPackInfo} />,
  );

  const explanationButton = getByRole('button', { name: 'Explanation' });
  user.click(explanationButton);
  expect(mockWindowOpen).toHaveBeenCalled();
  expect(mockWindowOpen).toHaveBeenCalledTimes(1);
  expect(mockWindowOpen).toHaveBeenCalledWith(
    trainingPackInfo.youtube_explanation,
    '_blank',
    'noopener,noreferrer',
  );
});
