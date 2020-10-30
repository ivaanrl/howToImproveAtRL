import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  TrainingPack as TrainingPackInterface,
  ContentCreator as ContentCreatorInterface,
  Mechanic,
  Tutorial,
} from '../../shared/interfaces';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getFeaturedTrainingPacks } from '../../lib/trainingPacks';
import ContentCreator from '../../components/contentCreator/contentCreator';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { actions as contentCreatorsActions } from '../../redux/reducers/contentCreators';

export default function ContentCreatorPage({
  featuredTrainingPackCreators,
}: {
  featuredTrainingPackCreators: {
    [contenCreatorName: string]: {
      contentCreatorInfo: ContentCreatorInterface;
      trainingPacks: TrainingPackInterface[];
      mechanics: Mechanic[];
      tutorials: Tutorial[];
    };
  };
}) {
  const state = useSelector((state: RootState) => state.contentCreators);
  const dispatch = useDispatch();
  const router = useRouter();
  const [trainingPacks, setTrainingPacks] = useState<TrainingPackInterface[]>();

  useEffect(() => {
    dispatch(
      contentCreatorsActions.populate_content_creators(
        featuredTrainingPackCreators,
      ),
    );
  }, []);

  useEffect(() => {
    if (
      state.featuredTrainingPackCreators[router.query.creatorName as string]
    ) {
      setTrainingPacks(
        state.featuredTrainingPackCreators[router.query.creatorName as string]
          .trainingPacks,
      );
    }
  }, [trainingPacks, router, state.featuredTrainingPackCreators]);

  return (
    <>
      <Head>
        <title>How to improve at Rocket League - Training Packs</title>
      </Head>
      <ContentCreator />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredTrainingPackCreators = await getFeaturedTrainingPacks();

  return {
    props: {
      featuredTrainingPackCreators: featuredTrainingPackCreators,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { creatorName: 'Poquito' } }],
    fallback: true,
  };
};
