import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  const db = await connect(
    process.env.MONGO_URI ?? "mongodb://127.0.0.1/evauth",
    {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    }
  );

  conn.isConnected = db.connections[0].readyState === 1;
}

connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
