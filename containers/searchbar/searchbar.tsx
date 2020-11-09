import { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { SearchBarContainer, SearchBarInput } from './searchbarStyles';

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  search: () => void;
  id: string;
  initialValue: string;
}

const SearchBar = ({
  searchValue,
  setSearchValue,
  search,
  id,
  initialValue,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') search();
  };

  useEffect(() => {
    if (initialValue === undefined) return;
    setSearchValue(initialValue);
  }, [initialValue]);

  return (
    <SearchBarContainer role="search-bar-container">
      <SearchBarInput
        id={id}
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name={id}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
