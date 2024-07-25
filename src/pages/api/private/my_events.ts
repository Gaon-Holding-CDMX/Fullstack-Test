import { NextApiRequest, NextApiResponse } from "next";
import { getUserId } from "@/lib/auth";
import Event from "@/models/Event";
import { connectDB } from "@/lib/mongoose";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDB();
  const userId = await getUserId(req);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  switch (req.method) {
    case "GET":
      let events = await Event.find({ userId });
      events = events.map((event) => {
        const { userId, __v, ...rest } = event.toObject();
        return rest;
      });

      return res.status(200).json(events);
    case "DELETE":
      const { id } = req.query;

      const event = await Event.findById(id);
      if (event.userId !== userId) {
        return res.status(403).json({ message: "Forbidden" });
      }

      fs.unlinkSync(`public/uploads/${event.file}`);
      await Event.findByIdAndDelete(id);
      return res.status(200).json({ message: "Event deleted" });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
