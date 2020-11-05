import { ChangeEvent, KeyboardEvent } from 'react';
import { SearchBarContainer, SearchBarInput } from './searchbarStyles';

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  search: () => void;
  id: string;
}

const SearchBar = ({ searchValue, setSearchValue, search, id }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') search();
  };

  return (
    <SearchBarContainer role="search-bar-container">
      <SearchBarInput
        id={id}
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
