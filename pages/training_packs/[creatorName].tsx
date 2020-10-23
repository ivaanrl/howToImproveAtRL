import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TrainingPacks from "../../components/trainingPacks/trainingPacks";
import { store, TrainingPack as TraningPackInterface } from "../../store";
import { GetStaticProps, GetStaticPaths } from "next";
import { getFeaturedTrainingPacks } from "../../lib/trainingPacks";

export default function TrainingPack({
  featuredTrainingPackCreators,
}: {
  featuredTrainingPackCreators: { [creator: string]: TraningPackInterface };
}) {
  const { state, dispatch } = useContext(store);
  const router = useRouter();
  const [trainingPacks, setTrainingPacks] = useState<TraningPackInterface[]>();

  useEffect(() => {
    dispatch({
      type: "POPULATE_SIDEBAR",
      payload: { featuredTrainingPackCreators },
    });
  }, []);

  useEffect(() => {
    setTrainingPacks(
      state.featuredTrainingPackCreators[router.query.creatorName as string]
        .trainingPacks
    );
  }, [trainingPacks, router, state.featuredTrainingPackCreators]);

  return (
    <>
      <Head>
        <title>How to improve at Rocket League - Training Packs</title>
      </Head>
      <TrainingPacks trainingPacksInfo={trainingPacks} />
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
