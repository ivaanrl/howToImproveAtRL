import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import NavbarPopper from '../navbarPopper';

jest.mock('next-auth/client', () => {
  return {
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
  };
});

test('renders properly', () => {
  const { getByRole, queryByRole } = render(<NavbarPopper />);

  expect(getByRole('button', { name: 'ivanrl' })).not.toBeNull();
  expect(queryByRole('button', { name: 'My Favorites' })).toBeNull();
});

test('popper opens on click', async () => {
  const { getByRole, queryByRole, findByRole } = render(<NavbarPopper />);

  const navbarButton = getByRole('button', { name: 'ivanrl' });
  expect(queryByRole('button', { name: 'My Favorites' })).toBeNull();

  user.click(navbarButton);
  expect(
    await findByRole('button', { name: 'My Favorites' }),
  ).toBeInTheDocument();
  expect(
    await findByRole('button', { name: 'My Uploads' }),
  ).toBeInTheDocument();
});

test('popper closes properly', () => {
  const { getByRole, queryByRole } = render(<NavbarPopper />);

  const navbarButton = getByRole('button', { name: 'ivanrl' });
  expect(queryByRole('button', { name: 'My Favorites' })).toBeNull();

  user.click(navbarButton);
  user.click(navbarButton);

  expect(queryByRole('button', { name: 'My Favorites' })).toBeNull();
});
