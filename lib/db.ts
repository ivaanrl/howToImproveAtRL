import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.mysql_host,
    database: process.env.mysql_database,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
  },
});

export const executeQuery = async ({
  query,
  values,
}: {
  query: string;
  values: any;
}) => {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
