import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.mysql_host,
    database: process.env.mysql_database,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
  },
});

export const query = async (query: any) => {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
