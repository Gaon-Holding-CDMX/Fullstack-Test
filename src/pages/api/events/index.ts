import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({ message: "Events" });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
