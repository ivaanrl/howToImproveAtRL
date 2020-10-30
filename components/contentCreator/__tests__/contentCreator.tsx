import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import ContentCreator from '../contentCreator';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {
      creatorName: 'ivanrl',
    },
  })),
}));

test('renders properly', async () => {
  const { getByTestId, findByTestId } = render(<ContentCreator />);
  await findByTestId('content creator header');
  expect(getByTestId('content creator name')).toBeInTheDocument();
  const socialNetworksContainer = getByTestId('social networks container');
  expect(socialNetworksContainer.children.length).toBe(9);

  const bigButtonsContainer = getByTestId('big buttons container');
  expect(bigButtonsContainer.children.length).toBe(3);
});

test('selecting categories work', async () => {
  const { getByRole, findByTestId } = render(<ContentCreator />);
  await findByTestId('content creator header');

  const trainingPackButton = getByRole('button', { name: 'Training Packs' });
  user.click(trainingPackButton);
  expect(getByRole('training-packs-container')).toBeInTheDocument();
});
