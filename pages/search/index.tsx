import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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

  return (
    <>
      <Head>
        <title>The Best Rocket League Trainings</title>
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const searchResults = await getSearchResults(
    (context.query as unknown) as searchAny | searchTrainingPack,
  );
  return {
    props: { searchResults },
  };
};
