import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchResultsContainer } from './searchResultsStyles';
import TrainingPackSearchResults from './trainingPackSearchResults';

const SearchResults = () => {
  /*const searchResults = useSelector(
    (state: RootState) => state.searchResults.searchResults,
  );*/
  return (
    <SearchResultsContainer>
      <TrainingPackSearchResults />
    </SearchResultsContainer>
  );
};

export default SearchResults;
