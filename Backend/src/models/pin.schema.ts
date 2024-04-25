import mongoose from "mongoose";
import { Pin } from "./pin.model";

const schema = new mongoose.Schema<Pin>({
      title: String,
      description: String,
      likes: Number,
      tags: Array<String>,
      img: String
});


export const PinSchema = mongoose.model('pins', schema);