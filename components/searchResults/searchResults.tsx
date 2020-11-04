import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { isTrainingPack } from '../../shared/interfaces';
import { SearchResultsContainer } from './searchResultsStyles';

const SearchResults = () => {
  const searchResults = useSelector(
    (state: RootState) => state.searchResults.searchResults,
  );
  return (
    <SearchResultsContainer>
      {searchResults.map((searchResult) => {
        {
          isTrainingPack(searchResult) ? (
            <div>{searchResult.training_pack_code}</div>
          ) : null;
        }
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
