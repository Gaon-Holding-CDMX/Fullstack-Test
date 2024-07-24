import { connectDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { checkPassword } from "@/lib/hash";
import { generateToken } from "@/lib/auth";
import User, { validateUser } from "@/models/User";;

async function login(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body;

  if (!validateUser(user)) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    const userInDB = await User.findOne({ email: user.email });

    if (!userInDB) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await checkPassword(user.password, userInDB.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = await generateToken({
      id: userInDB._id.toString(),
    });

    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; SameSite=Strict; Max-Age=${
        60 * 60 * 24 * 7
      }; Path=/`
    );

    res.status(200).json({ message: "User logged in" });
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
      return await login(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
