import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchResultsContainer } from './searchResultsStyles';
import TrainingPackSearchResult from './trainingPackSearchResult/trainingPackSearchResult';
import { isTrainingPack } from '../../shared/interfaces';

const SearchResults = () => {
  const searchResults = useSelector(
    (state: RootState) => state.searchResults.searchResults,
  );

  return (
    <SearchResultsContainer>
      {searchResults.map((searchResult, index) => {
        if (isTrainingPack(searchResult)) {
          return (
            <TrainingPackSearchResult
              trainingPackInfo={searchResult}
              key={index}
            />
          );
        }
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
