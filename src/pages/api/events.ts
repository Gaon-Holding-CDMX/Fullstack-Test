import { NextApiRequest, NextApiResponse } from "next";
import Event from "@/models/Event";
import { connectDB } from "@/lib/mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDB();

  switch (req.method) {
    case "GET":
      let events = await Event.find({}).sort({ date: 1 }).limit(4);
      events = events.map((event) => {
        const { userId, __v, ...rest } = event.toObject();
        return rest;
      });

      return res.status(200).json(events);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
