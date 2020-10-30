import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getFeaturedTrainingPacks } from '../lib/trainingPacks';
import { useContext, useEffect } from 'react';
import { store } from '../store';
import { ContentCreator, TrainingPack } from '../shared/interfaces';

export default function Home({
  featuredTrainingPackCreators,
}: {
  featuredTrainingPackCreators: {
    [contenCreatorName: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
    };
  };
}) {
  const { dispatch } = useContext(store);

  useEffect(() => {
    dispatch({
      type: 'POPULATE_SIDEBAR',
      payload: { featuredTrainingPackCreators },
    });
  }, []);

  return (
    <>
      <Head>
        <title>How to improve at Rocket League</title>
      </Head>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredTrainingPackCreators = await getFeaturedTrainingPacks();

  return {
    props: {
      featuredTrainingPackCreators,
    },
  };
};
