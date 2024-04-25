import mongoose from "mongoose";
import { Board } from "./board.model";

const schema = new mongoose.Schema<Board>({
      boardTitle: String,
      pins: [
        {
          _id: {
            $oid: mongoose.Types.ObjectId
          },
          img: String
        },
        {
          _id: {
            $oid: mongoose.Types.ObjectId
          },
          img: String
        },
        {
          _id: {
            $oid: mongoose.Types.ObjectId
          },
          img: String
        },
        {
          _id: {
            $oid: mongoose.Types.ObjectId
          },
          img: String
        },
        {
          _id: {
            $oid: mongoose.Types.ObjectId
          },
          img: String
        }
      ],
      boardImage: String
});

export const BoardSchema = mongoose.model('boards', schema);