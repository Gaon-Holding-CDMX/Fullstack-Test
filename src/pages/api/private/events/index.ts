import { NextApiRequest, NextApiResponse } from "next";
import { getUserId } from "@/lib/auth";
import multer from "multer";
import path from "path";
import { connectDB } from "@/lib/mongoose";
import Event, { validateEvent } from "@/models/Event";

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (_, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  dest: "public/uploads/",
  limits: { fileSize: 10 * 1024 * 1024 },
  storage,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDB();
  const userId = await getUserId(req);

  switch (req.method) {
    case "POST":
      return upload.single("file")(req as any, res as any, async (err) => {
        if (err instanceof multer.MulterError) {
          return res.status(500).json({ error: err.message });
        } else if (err) {
          return res
            .status(500)
            .json({ error: "Failed to upload file due to server error" });
        }

        if (!(req as any).file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        if (
          !validateEvent({
            ...req.body,
            date: new Date(req.body.date),
          })
        ) {
          return res.status(400).json({ error: "Invalid event data" });
        }

        const event = {
          ...req.body,
          file: (req as any).file.filename,
          userId: userId,
        };

        const doc = await Event.create(event);
        res
          .status(200)
          .json({ file: (req as any).file, eventId: doc._id.toString() });
      });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
