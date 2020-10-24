import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TrainingPacks from "../../components/trainingPacks/trainingPacks";
import { store, TrainingPack as TraningPackInterface } from "../../store";
import { GetStaticProps, GetStaticPaths } from "next";
import { getFeaturedTrainingPacks } from "../../lib/trainingPacks";
import ContentCreator from "../../components/contentCreator/contentCreator";

export default function TrainingPack({
  featuredTrainingPackCreators,
}: {
  featuredTrainingPackCreators: { [creator: string]: TraningPackInterface };
}) {
  const { state, dispatch } = useContext(store);
  const router = useRouter();
  const [trainingPacks, setTrainingPacks] = useState<TraningPackInterface[]>();
  const [page, setPage] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    dispatch({
      type: "POPULATE_SIDEBAR",
      payload: { featuredTrainingPackCreators },
    });
  }, []);

  useEffect(() => {
    if (
      state.featuredTrainingPackCreators[router.query.creatorName as string]
    ) {
      setTrainingPacks(
        state.featuredTrainingPackCreators[router.query.creatorName as string]
          .trainingPacks
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
    paths: [{ params: { creatorName: "Poquito" } }],
    fallback: true,
  };
};
