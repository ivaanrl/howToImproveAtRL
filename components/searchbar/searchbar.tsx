import { ChangeEvent, KeyboardEvent } from 'react';
import {
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
} from './searchbarStyles';

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  search: () => void;
}

const SearchBar = ({ searchValue, setSearchValue, search }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') search();
  };

  return (
    <SearchBarContainer role="search-bar-container">
      <SearchBarInput
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
      <SearchBarIcon
        aria-label="search icon"
        onClick={search}
        onKeyPress={handleKeyPress}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
