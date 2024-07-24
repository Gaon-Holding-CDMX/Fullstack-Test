import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      res.setHeader(
        "Set-Cookie",
        `token=; HttpOnly; SameSite=Strict; Max-Age=0; Path=/`
      );

      return res.status(200).json({ message: "User logged out" });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}