import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  TrainingPack as TrainingPackInterface,
  ContentCreator as ContentCreatorInterface,
  Mechanic,
  Tutorial,
} from '../../shared/interfaces';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getFeaturedTrainingPacks } from '../../lib/trainingPacks';
import ContentCreator from '../../containers/contentCreator/contentCreator';
import { getFeaturedContentCreatorsName } from '../../lib/getFeaturedContentCreators';

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
  const router = useRouter();

  return (
    <>
      <Head>
        <title>How to improve at Rocket League - Training Packs</title>
      </Head>

      <ContentCreator
        currentContentCreator={
          featuredTrainingPackCreators[router.query.creatorName as string]
        }
      />
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
  const featuredCreators = await getFeaturedContentCreatorsName();
  return {
    paths: featuredCreators.map((featuredCreator: { name: string }) => {
      return { params: { creatorName: featuredCreator.name } };
    }),
    fallback: true,
  };
};
