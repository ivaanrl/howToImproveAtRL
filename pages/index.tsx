import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getFeaturedTrainingPacks } from '../lib/trainingPacks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as contentCreatorsActions } from '../redux/reducers/contentCreators';
import {
  ContentCreator,
  Mechanic,
  TrainingPack,
  Tutorial,
} from '../shared/interfaces';

export default function Home({
  featuredTrainingPackCreators,
}: {
  featuredTrainingPackCreators: {
    [contenCreatorName: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
      mechanics: Mechanic[];
      tutorials: Tutorial[];
    };
  };
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      contentCreatorsActions.populate_content_creators(
        featuredTrainingPackCreators,
      ),
    );
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
