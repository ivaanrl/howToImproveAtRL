import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { getSearchResults } from '../../lib/search';
import {
  Mechanic,
  Tutorial,
  TrainingPack,
  searchAny,
  searchTrainingPack,
} from '../../shared/interfaces';
import { actions as searchResultsActions } from '../../redux/reducers/searchResults';
import SearchBar from '../../containers/searchbar/searchbar';
import TrainingStyleSelector from '../../shared/modules/react-select/TrainingStyleSelector';
import ContentCreatorSelector from '../../shared/modules/react-select/ContentCreatorSelector';
import DifficultySelector from '../../shared/modules/react-select/difficultySelector';
import CategorySelector from '../../shared/modules/react-select/CategorySelector';
import SearchResults from '../../containers/searchResults/searchResults';
import {
  FilterContainer,
  SelectContainer,
  SelectLabel,
} from '../../shared/ui/select-styles/selectStyles';
import { FilterSearchButton } from '../../shared/ui/buttonStyles';

export default function SearchPage({
  searchResults,
  total_count,
}: {
  searchResults: (TrainingPack | Mechanic | Tutorial)[];
  total_count: number;
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchResultsActions.populate_search_results(searchResults));
    dispatch(searchResultsActions.update_total_count(total_count));
  }, [router.query]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<{ value: string; label: string }>({
    value: 'training pack',
    label: 'Training Packs',
  });
  const [trainingPackValue, setTrainingPackValue] = useState<
    { value: string; label: string }[]
  >([]);
  const [contentCreatorValue, setContentCreatorValue] = useState<
    { value: string; label: string }[]
  >([]);
  const [difficultyValue, setDifficultyValue] = useState<
    { value: string; label: string }[]
  >([]);

  const search = () => {
    router.push({
      query: {
        searchType: category.value,
        name: searchValue,
        training_styles: trainingPackValue?.map((selectedOption) => {
          return selectedOption?.value;
        }),
        contentCreators: contentCreatorValue?.map((selectedOption) => {
          return selectedOption?.value;
        }),
        difficulties: difficultyValue?.map((selectedOption) => {
          return selectedOption?.value;
        }),
        page: 0,
      },
    });
  };

  return (
    <>
      <Head>
        <title>The Best Rocket League Trainings</title>
      </Head>
      <FilterContainer>
        <SelectContainer data-testid="category-selector-form">
          <SelectLabel htmlFor="category-selector">Category</SelectLabel>
          <CategorySelector
            id="category-selector"
            value={category}
            setValue={setCategory}
          />
        </SelectContainer>
        <FilterSearchButton onClick={search}>Search</FilterSearchButton>
        <SelectContainer>
          <SelectLabel htmlFor="filter-searchbar">Name</SelectLabel>
          <SearchBar
            id="filter-searchbar"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            search={search}
            initialValue={router.query.name as string}
          />
        </SelectContainer>
        {category.label === 'Training Packs' ? (
          <>
            <SelectContainer data-testid="training-style-selector-form">
              <SelectLabel htmlFor="training-style-selector">
                Training Style
              </SelectLabel>

              <TrainingStyleSelector
                value={trainingPackValue}
                setValue={setTrainingPackValue}
                initialValue={router.query.training_styles}
                selectId="training-style-selector"
              />
            </SelectContainer>
            <SelectContainer data-testid="content-creator-selector-form">
              <SelectLabel htmlFor="content-creator-selector">
                Creator
              </SelectLabel>
              <ContentCreatorSelector
                value={contentCreatorValue}
                setValue={setContentCreatorValue}
                initialValue={router.query.contentCreators}
                id="content-creator-selector"
              />
            </SelectContainer>
            <SelectContainer data-testid="difficulty-selector-form">
              <SelectLabel htmlFor="difficulty-selector">
                Difficulty
              </SelectLabel>
              <DifficultySelector
                value={difficultyValue}
                setValue={setDifficultyValue}
                initialValue={router.query.difficulties}
                id="difficulty-selector"
              />
            </SelectContainer>
          </>
        ) : null}
      </FilterContainer>
      <SearchResults />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { queryResult, total_count } = await getSearchResults(
    (context.query as unknown) as searchAny | searchTrainingPack,
  );

  return {
    props: { searchResults: queryResult, total_count },
  };
};
