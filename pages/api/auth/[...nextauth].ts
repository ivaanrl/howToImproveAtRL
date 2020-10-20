import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  providers: [
    {
      id: "steam",
      name: "Steam",
      type: "oauth",
      version: "2.0",
      scope: ["email"],
      authorizationUrl: `https://steamcommunity.com/oauth/login?response_type=token&client_id=${process.env.steam_secret}`,
      accessTokenUrl: `http://redirect/uri/here#access_token=token_here&token_type=steam`,
      clientId: process.env.steam_secret,
    },
  ],
  database: process.env.mysql_host,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(process.env.steam_secret);
  return NextAuth(req, res, options);
};
