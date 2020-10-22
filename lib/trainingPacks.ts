import { TrainingPack } from "../store";
import { executeQuery } from "./db";

export const getFeaturedTrainingPacks = async () => {
  const result = await executeQuery({
    query: "SELECT * FROM training_packs WHERE featured = ?",
    values: ["1"],
  });

  const featuredCreatorsQueryResult = await executeQuery({
    query: "Select training_pack_author FROM training_packs WHERE featured = ?",
    values: ["1"],
  });

  const featuredCreatorsJSON: { training_pack_author: string }[] = JSON.parse(
    JSON.stringify(featuredCreatorsQueryResult)
  );

  const featuredCreatorsPacks = {};
  featuredCreatorsJSON.forEach((featuredCreator) => {
    if (featuredCreator.training_pack_author in featuredCreatorsPacks) return;
    featuredCreatorsPacks[featuredCreator.training_pack_author] = [];
  });

  const resultsInJSON = JSON.parse(JSON.stringify(result));
  resultsInJSON.map((trainingPack: TrainingPack) => {
    featuredCreatorsPacks[trainingPack.training_pack_author].push(trainingPack);
  });

  return featuredCreatorsPacks;
};
