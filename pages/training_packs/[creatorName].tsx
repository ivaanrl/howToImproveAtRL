import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, Fragment } from "react";
import FeaturedTrainingPack from "../../components/trainingPack/featuredTrainingPack";
import TrainingPacks from "../../components/trainingPacks/trainingPacks";
import { store, TrainingPack as TraningPackInterface } from "../../store";

export default function TrainingPack() {
  const { featuredTrainingPackCreators } = useContext(store).state;
  const router = useRouter();
  const [trainingPacks, setTrainingPacks] = useState<TraningPackInterface[]>();

  useEffect(() => {
    console.log(trainingPacks);
    setTrainingPacks(
      featuredTrainingPackCreators[router.query.creatorName as string]
    );
  }, [trainingPacks, router]);

  return (
    <>
      <Head>
        <title>How to improve at Rocket League - Training Packs</title>
      </Head>
      <TrainingPacks trainingPacksInfo={trainingPacks} />
    </>
  );
}
