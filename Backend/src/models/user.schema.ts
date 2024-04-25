import mongoose from "mongoose";
import { User } from "./user.model";

const schema = new mongoose.Schema<User>({
      nombre: String,
      imagenPerfil: String,
      boards: Array<mongoose.Schema.Types.ObjectId>
});

export const UserSchema = mongoose.model('users', schema);