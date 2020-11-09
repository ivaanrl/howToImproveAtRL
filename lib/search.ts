import {
  Mechanic,
  searchAny,
  searchTrainingPack,
  TrainingPack,
  Tutorial,
} from '../shared/interfaces';
import { executeQuery } from './db';

export const PAGE_LIMIT = 6;

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
  console.log(query);
  const page = parseInt(query.page, 10) || 0;

  const difficulties = query.difficulties
    ? Array.isArray(query.difficulties)
      ? query.difficulties
      : [query.difficulties]
    : [];
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
    ? Array.isArray(query.training_styles)
      ? query.training_styles
      : [query.training_styles]
    : [];
  let training_style_query: string = training_styles.length > 0 ? 'AND ' : '';
  training_styles.forEach((training_style, index: number) => {
    if (index < training_styles.length - 1) {
      training_style_query += `training_style REGEXP '"${training_style}":([^"])true([^"])' AND `;
    } else {
      training_style_query += `training_style REGEXP '"${training_style}":([^"])true([^"])'`;
    }
  });

  const content_creators = query.contentCreators
    ? Array.isArray(query.contentCreators)
      ? query.contentCreators
      : [query.contentCreators]
    : [];
  let content_creators_query: string;
  if (content_creators.length > 0) {
    content_creators_query = '(';
    content_creators.forEach((content_creator, index: number) => {
      if (index < content_creators.length - 1) {
        content_creators_query += `'${content_creator}',`;
      } else {
        content_creators_query += `'${content_creator}')`;
      }
    });
  } else {
    content_creators_query = '';
  }

  const whereQuery = `
  training_pack_name LIKE '%${
    query.name ? query.name : ''
  }%' AND difficulty IN ${difficultyQuery} ${training_style_query} ${
    content_creators.length > 0 ? ' AND content_creators.name IN ' : ''
  } ${content_creators_query}
  `;

  console.log(`
  SELECT training_pack_id,field_image,difficulty,training_pack_code,training_style, 
  training_pack_name,youtube_explanation, content_creators.name, content_creators.picture 
  FROM training_packs
  INNER JOIN(
          SELECT name, content_creator_id, featured,picture FROM content_creators
  ) AS content_creators ON training_packs.training_pack_author = content_creators.content_creator_id 
  WHERE ${whereQuery}
  LIMIT ${PAGE_LIMIT} OFFSET ${page * PAGE_LIMIT}
  `);

  const queryResult: (TrainingPack | Mechanic | Tutorial)[] = JSON.parse(
    JSON.stringify(
      await executeQuery({
        query: `
        SELECT training_pack_id,field_image,difficulty,training_pack_code,training_style, 
        training_pack_name,youtube_explanation, content_creators.name, content_creators.picture 
        FROM training_packs
        INNER JOIN(
                SELECT name, content_creator_id, featured,picture FROM content_creators
        ) AS content_creators ON training_packs.training_pack_author = content_creators.content_creator_id 
        WHERE ${whereQuery}
        LIMIT ${PAGE_LIMIT} OFFSET ${page * PAGE_LIMIT}
        `,
        values: [],
      }),
    ),
  );

  const numberOfResults: { total_count: number }[] = JSON.parse(
    JSON.stringify(
      await executeQuery({
        query: `
      SELECT COUNT(training_pack_id) as total_count 
      FROM training_packs
      INNER JOIN(
              SELECT name, content_creator_id, featured,picture FROM content_creators
      ) AS content_creators ON training_packs.training_pack_author = content_creators.content_creator_id 
      WHERE ${whereQuery}`,
        values: [],
      }),
    ),
  );

  return { queryResult, total_count: numberOfResults[0].total_count };
};

const getAnySearch = async (_query: searchAny) => {
  const queryResult: (TrainingPack | Mechanic | Tutorial)[] = [];
  return { queryResult, total_count: 0 };
};
