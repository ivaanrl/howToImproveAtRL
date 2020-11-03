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
import SearchBar from '../../components/searchbar/searchbar';
import { BackgroundDefault } from '../../shared/ui/backgroundStyles';
import TrainingPackSelector from '../../shared/modules/react-select/TrainingPackSelector';
import ContentCreatorSelector from '../../shared/modules/react-select/ContentCreatorSelector';
import DifficultySelector from '../../shared/modules/react-select/difficultySelector';
import CategorySelector from '../../shared/modules/react-select/CategorySelector';
import { stringify } from 'querystring';

export default function SearchPage({
  searchResults,
}: {
  searchResults: (TrainingPack | Mechanic | Tutorial)[];
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchResultsActions.populate_search_results(searchResults));
  }, [router.query]);

  const [searchValue, setSearchValue] = useState<string>();
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
        training_styles: trainingPackValue.map((selectedOption) => {
          return selectedOption.value;
        }),
        contentCreators: contentCreatorValue.map((selectedOption) => {
          return selectedOption.value;
        }),
        difficulties: difficultyValue.map((selectedOption) => {
          return selectedOption.value;
        }),
      },
    });
  };

  return (
    <BackgroundDefault>
      <Head>
        <title>The Best Rocket League Trainings</title>
      </Head>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={search}
      />
      <CategorySelector value={category} setValue={setCategory} />
      {category.label === 'Training Packs' ? (
        <>
          <TrainingPackSelector
            value={trainingPackValue}
            setValue={setTrainingPackValue}
          />
          <ContentCreatorSelector
            value={contentCreatorValue}
            setValue={setContentCreatorValue}
          />
          <DifficultySelector
            value={difficultyValue}
            setValue={setDifficultyValue}
          />
        </>
      ) : null}
    </BackgroundDefault>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchResults = await getSearchResults(
    (context.query as unknown) as searchAny | searchTrainingPack,
  );

  return {
    props: { searchResults },
  };
};
