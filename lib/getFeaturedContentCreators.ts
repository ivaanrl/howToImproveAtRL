import { executeQuery } from './db';

export const getFeaturedContentCreatorsName = async () => {
  const featuredContentCreators = await executeQuery({
    query: 'Select name FROM content_creators WHERE featured = ?',
    values: ['1'],
  });

  return JSON.parse(JSON.stringify(featuredContentCreators));
};
