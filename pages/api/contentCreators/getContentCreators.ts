import { NextApiRequest, NextApiResponse } from 'next';
import { executeQuery } from '../../../lib/db';
import { ContentCreator } from '../../../shared/interfaces';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await executeQuery({
      query: 'Select name FROM content_creators',
      values: [],
    });

    const featuredCreatorsJSON: ContentCreator[] = JSON.parse(
      JSON.stringify(result),
    );

    return res.send(featuredCreatorsJSON);
  } catch (error) {
    console.log(error);

    return error;
  }
};
