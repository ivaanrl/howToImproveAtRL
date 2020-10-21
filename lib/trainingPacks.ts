import { executeQuery } from "./db";

export const getFeaturedTrainingPacks = async () => {
  const result = await executeQuery({
    query: "SELECT * FROM training_packs WHERE featured = 1",
    values: [],
  });

  return JSON.stringify(result);
};
