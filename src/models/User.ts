import z from "zod";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

UserSchema.methods.validate = function (obj: typeof UserSchema): boolean {
  return schema.safeParse(obj).success;
};

export default models.User || model("User", UserSchema);
