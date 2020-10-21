import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  providers: [
    /*{ NEED TO FIGURE OUT HOW TO HANDLE STEAM LOGIN
      id: "steam",
      name: "Steam",
      type: "oauth",
      version: "2.0",
      scope: ["email"],
      authorizationUrl: `https://steamcommunity.com/oauth/login?response_type=token&client_id=${process.env.steam_secret}`,
      accessTokenUrl: `http://redirect/uri/here#access_token=token_here&token_type=steam`,
      clientId: process.env.steam_secret,
    },*/
    Providers.Google({
      clientId: process.env.google_client_id,
      clientSecret: process.env.google_secret,
    }),
  ],
  database: ({
    type: "mysql",
    host: process.env.mysql_host,
    port: 3306,
    username: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
  } as unknown) as string,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
};
