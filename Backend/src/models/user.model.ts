import mongoose from "mongoose";

export interface User {
      nombre: string,
      imagenPerfil: string,
      boards: Array<mongoose.Schema.Types.ObjectId>
}