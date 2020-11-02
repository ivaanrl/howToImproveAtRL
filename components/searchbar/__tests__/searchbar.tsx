import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import faker from 'faker';
import SearchBar from '../searchbar';

const mockSetSearchValue = jest.fn();
const mockSearch = jest.fn();

test('renders properly', () => {
  const { getByPlaceholderText, getByRole } = render(
    <SearchBar
      searchValue=""
      setSearchValue={mockSetSearchValue}
      search={mockSearch}
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
    />,
  );
  const searchInput = getByPlaceholderText(/search.../i);
  user.type(searchInput, 'this is my search');
  expect(mockSetSearchValue).toHaveBeenCalledTimes('this is my search'.length);
});

describe('calls search function', () => {
  test('when clicking search icon', () => {
    const { getByLabelText } = render(
      <SearchBar
        searchValue=""
        setSearchValue={mockSetSearchValue}
        search={mockSearch}
      />,
    );
    const searchIcon = getByLabelText('search icon');
    user.click(searchIcon);
    expect(mockSearch).toHaveBeenCalled();
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });

  test('when pressing Enter', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        searchValue=""
        setSearchValue={mockSetSearchValue}
        search={mockSearch}
      />,
    );
    const searchInput = getByPlaceholderText(/search.../i);
    user.type(searchInput, '{Enter}');
    expect(mockSearch).toHaveBeenCalled();
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
