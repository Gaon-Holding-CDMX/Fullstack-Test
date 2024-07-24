import { connectDB } from "@/utils/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

async function register(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body;

  if (!User.validate(user)) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    const hashedPassword = await hashPassword(user.password);

    if (!hashedPassword) {
      return res.status(500).json({ message: "Internal server error" });
    }

    user.password = hashedPassword;

    if (await User.exists({ email: user.email })) {
      return res
        .status(400)
        .json({ message: "Email already exists in the database" });
    }

    await User.create(user);
    res.status(201).json({ message: "User created" });
  } catch (_) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDB();

  switch (req.method) {
    case "POST":
      return await register(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
