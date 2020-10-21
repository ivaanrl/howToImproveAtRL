import { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const trainingPackName = req.query.name;

  try {
    const result = await executeQuery({
      query: "SELECT * FROM training_packs WHERE training_pack_name = ?",
      values: [trainingPackName],
    });
    return res.json(result);
  } catch (error) {
    console.log(error);

    return error;
  }
};
