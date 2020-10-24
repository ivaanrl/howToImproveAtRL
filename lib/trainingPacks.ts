import { TrainingPack, ContentCreator } from "../store";
import { executeQuery } from "./db";

export const getFeaturedTrainingPacks = async () => {
  const result = await executeQuery({
    query: `
      SELECT training_pack_id,field_image,difficulty,training_pack_code,training_style, training_pack_name, content_creators.name, content_creators.picture FROM training_packs 
      INNER JOIN(
        SELECT name, content_creator_id, featured,picture FROM content_creators
      ) AS content_creators ON training_packs.training_pack_author = content_creators.content_creator_id
      WHERE content_creators.featured = ?
    `,
    values: ["1"],
  });

  const featuredCreatorsQueryResult = await executeQuery({
    query: "Select * FROM content_creators WHERE featured = ?",
    values: ["1"],
  });

  const featuredCreatorsJSON: ContentCreator[] = JSON.parse(
    JSON.stringify(featuredCreatorsQueryResult)
  );

  const featuredCreatorsPacks: {
    [contenCreatorName: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
    };
  } = {};
  featuredCreatorsJSON.forEach((featuredCreator) => {
    if (featuredCreator.name in featuredCreatorsPacks) return;
    const {
      content_creator_id,
      tiktok,
      youtube,
      twitter,
      steam,
      instagram,
      personal_website,
      facebook,
      discord,
      twitch,
      featured,
      name,
      picture,
    } = featuredCreator;
    featuredCreatorsPacks[featuredCreator.name] = {
      contentCreatorInfo: {
        content_creator_id,
        tiktok,
        youtube,
        twitter,
        steam,
        instagram,
        personal_website,
        facebook,
        discord,
        twitch,
        featured,
        name,
        picture,
      },
      trainingPacks: [],
    };
  });

  console.log("featuredCreatorsJSON: ", featuredCreatorsPacks);

  const resultsInJSON = JSON.parse(JSON.stringify(result));
  resultsInJSON.map((trainingPack: TrainingPack) => {
    featuredCreatorsPacks[trainingPack.name].trainingPacks.push(trainingPack);
  });

  console.log(featuredCreatorsPacks);

  return featuredCreatorsPacks;
};
