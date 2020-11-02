import {
  Mechanic,
  searchAny,
  searchTrainingPack,
  TrainingPack,
  Tutorial,
} from '../shared/interfaces';
import { executeQuery } from './db';

export const getSearchResults = async (
  query: searchAny | searchTrainingPack,
) => {
  switch (query.searchType) {
    case 'any':
      return await getAnySearch(query);
    case 'training pack':
      return await getTrainingPackSearch(query);
    default:
      return;
  }
};

const getTrainingPackSearch = async (query: searchTrainingPack) => {
  const difficulties = query.difficulties.replace(/[\[\]]/g, '').split(',');
  let difficultyQuery: string;
  if (difficulties.length > 0) {
    difficultyQuery = '(';
    difficulties.forEach((difficulty, index: number) => {
      if (index < difficulties.length - 1) {
        difficultyQuery += `'${difficulty}',`;
      } else {
        difficultyQuery += `'${difficulty}')`;
      }
    });
  } else {
    difficultyQuery = "('Easy','Medium','Hard')";
  }

  const training_styles = query.training_styles
    ? query.training_styles.replace(/[\[\]]/g, '').split(',')
    : [];
  let training_style_query: string = training_styles.length > 0 ? 'AND ' : '';
  training_styles.forEach((training_style, index: number) => {
    if (index < training_styles.length - 1) {
      console.log(index);
      training_style_query += `training_style REGEXP '"${training_style}":([^"])true([^"])' AND `;
    } else {
      training_style_query += `training_style REGEXP '"${training_style}":([^"])true([^"])'`;
    }
  });

  const whereQuery = `
  training_pack_name LIKE '%${query.name}%' AND difficulty IN ${difficultyQuery} ${training_style_query}
  `;

  const queryResult: (TrainingPack | Mechanic | Tutorial)[] = JSON.parse(
    JSON.stringify(
      await executeQuery({
        query: `
        SELECT training_pack_id,field_image,difficulty,training_pack_code,training_style, 
        training_pack_name, content_creators.name, content_creators.picture 
        FROM training_packs
        INNER JOIN(
                SELECT name, content_creator_id, featured,picture FROM content_creators
        ) AS content_creators ON training_packs.training_pack_author = content_creators.content_creator_id 
        WHERE ${whereQuery}`,
        values: [],
      }),
    ),
  );

  return queryResult;
};

const getAnySearch = async (_query: searchAny) => {};
