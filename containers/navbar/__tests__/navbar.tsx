import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import Navbar from '../navbar';
import faker from 'faker';

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

const mockPushRouter = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPushRouter,
  }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('renders properly', () => {
  test('with user signed in', () => {
    const {
      getByTestId,
      getByRole,
      queryByTestId,
      getByPlaceholderText,
    } = render(<Navbar />);

    expect(getByTestId('navbar container')).toBeInTheDocument();
    expect(getByRole('button', { name: 'ivanrl' })).toBeInTheDocument();
    expect(queryByTestId('sign in with google')).toBeNull();
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
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

test('search redirects to correct path', () => {
  const searchQuery = faker.lorem.words(3);
  const { getByPlaceholderText, getByLabelText } = render(<Navbar />);
  const searchBar = getByPlaceholderText(/search/i);
  user.type(searchBar, searchQuery);
  const searchButton = getByLabelText('search button');
  user.click(searchButton);
  expect(mockPushRouter).toHaveBeenCalled();
  expect(mockPushRouter).toHaveBeenCalledTimes(1);
  expect(mockPushRouter).toHaveBeenCalledWith({
    pathname: '/search',
    query: { name: searchQuery, searchType: 'any' },
  });
});
