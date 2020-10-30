import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TrainingPacks from '../../components/trainingPacks/trainingPacks';
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

export default function TrainingPack({
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
  const [page] = useState<0 | 1 | 2 | 3>(0);

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

  const renderPage = () => {
    switch (page) {
      case 0:
        break;
      case 1:
        return <TrainingPacks trainingPacksInfo={trainingPacks} />;
      case 2:
        break;
      case 3:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>How to improve at Rocket League - Training Packs</title>
      </Head>
      <ContentCreator />
      {renderPage()}
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
