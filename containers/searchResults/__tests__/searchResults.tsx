import { render } from '../../../test/testsUtils';
import SearchResults from '../searchResults';

const mockRouterPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {},
    push: mockRouterPush,
  })),
}));

test('renders properly', () => {
  const {} = render(<SearchResults />);
});
