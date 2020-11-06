import styles from '../../styles/react-pagination.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchResultsContainer } from './searchResultsStyles';
import TrainingPackSearchResult from './trainingPackSearchResult/trainingPackSearchResult';
import { isTrainingPack } from '../../shared/interfaces';
import ReactPaginate from 'react-paginate';
import { PAGE_LIMIT } from '../../shared/constants/search';
import { useRouter } from 'next/router';

const SearchResults = () => {
  const router = useRouter();
  const { searchResults, total_count } = useSelector(
    (state: RootState) => state.searchResults,
  );

  const handlePageChange = (pageChangeEvent: { selected: number }) => {
    const query = router.query;
    const newQuery = { ...query, ...{ page: pageChangeEvent.selected } };
    router.push({ query: newQuery });
  };

  return (
    <>
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
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        initialPage={parseInt(router.query.page as string, 10) || 0}
        pageCount={total_count / PAGE_LIMIT}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        breakClassName={'react-pagination-break-me'}
        activeClassName={'react-pagination-active'}
        containerClassName={'react-pagination-container'}
        pageClassName={'react-pagination-page'}
        previousClassName={'react-pagination-previous'}
        nextClassName={'react-pagination-next'}
      />
    </>
  );
};

export default SearchResults;
