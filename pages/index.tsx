import Head from "next/head";
import { GetStaticProps } from "next";
import { getFeaturedTrainingPacks } from "../lib/trainingPacks";
import { useContext, useEffect } from "react";
import { store } from "../store";

export default function Home({ trainingPacks }: { trainingPacks: any }) {
  const { dispatch } = useContext(store);

  useEffect(() => {
    dispatch({
      type: "POPULATE_SIDEBAR",
      payload: { trainingPacks: JSON.parse(trainingPacks) },
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
  const trainingPacks = await getFeaturedTrainingPacks();

  return {
    props: {
      trainingPacks,
    },
  };
};
