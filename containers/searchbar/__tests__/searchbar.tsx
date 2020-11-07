import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import SearchBar from '../searchbar';

const mockSetSearchValue = jest.fn();
const mockSearch = jest.fn();

test('renders properly', () => {
  const { getByPlaceholderText, getByRole } = render(
    <SearchBar
      searchValue=""
      setSearchValue={mockSetSearchValue}
      search={mockSearch}
      id="test-search-bar"
    />,
  );
  expect(getByPlaceholderText(/search.../i)).toBeInTheDocument();
  expect(getByRole('search-bar-container')).toBeInTheDocument();
});

test('calls function to update input value', () => {
  const { getByPlaceholderText } = render(
    <SearchBar
      searchValue=""
      setSearchValue={mockSetSearchValue}
      search={mockSearch}
      id="test-search-bar"
    />,
  );
  const searchInput = getByPlaceholderText(/search.../i);
  user.type(searchInput, 'this is my search');
  expect(mockSetSearchValue).toHaveBeenCalledTimes('this is my search'.length);
});

describe('calls search function', () => {
  test('when pressing Enter', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        searchValue=""
        setSearchValue={mockSetSearchValue}
        search={mockSearch}
        id="test-search-bar"
      />,
    );
    const searchInput = getByPlaceholderText(/search.../i);
    user.type(searchInput, '{enter}');
    expect(mockSearch).toHaveBeenCalled();
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
