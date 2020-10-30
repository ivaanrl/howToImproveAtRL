import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import Navbar from '../navbar';

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [
      {
        accessToken: '',
        expires: '',
        user: {
          name: 'ivanrl',
          email: 'ivan@example.com',
          image: 'https://my-image-url.com/image-path',
        },
      },
      true,
    ];
  }),
}));

describe('renders properly', () => {
  test('with user signed in', () => {
    const { getByTestId, getByRole, queryByTestId } = render(<Navbar />);

    expect(getByTestId('navbar container')).toBeInTheDocument();
    expect(getByRole('button', { name: 'ivanrl' })).toBeInTheDocument();
    expect(queryByTestId('sign in with google')).toBeNull();
  });
});

test('can open sidebar', async () => {
  const { getByLabelText, findByLabelText } = render(<Navbar />);

  const openMenuButton = getByLabelText('open sidebar button');
  user.click(openMenuButton);
  expect(await findByLabelText('sidebar container')).toBeInTheDocument();
});

test('can close sidebar', async () => {
  const { getByLabelText, findByLabelText, queryByLabelText } = render(
    <Navbar />,
  );

  const openSidebarButton = getByLabelText('open sidebar button');
  user.click(openSidebarButton);
  expect(await findByLabelText('sidebar container')).toBeInTheDocument();
  const closeSidebarButton = getByLabelText('close sidebar menu');
  user.click(closeSidebarButton);
  expect(queryByLabelText('sidebar container')).toBeInTheDocument();
});
