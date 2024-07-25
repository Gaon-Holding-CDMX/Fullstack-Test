import z from "zod";
import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: String,
  userId: String,
  description: String,
  file: String,
  date: Date,
});

const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(500),
  date: z.date(),
});

export function validateEvent(obj: typeof EventSchema): boolean {
  try {
    schema.parse(obj);
  } catch (error) {
    console.error(error);
  }

  return schema.safeParse(obj).success;
}

export default models.Event || model("Event", EventSchema);
