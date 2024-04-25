import mongoose from "mongoose";

export interface Board {
        boardTitle: string,
        pins: [
          {
            _id: {
              $oid: mongoose.Types.ObjectId
            },
            img: string
          },
          {
            _id: {
              $oid: mongoose.Types.ObjectId
            },
            img: string
          },
          {
            _id: {
              $oid: mongoose.Types.ObjectId
            },
            img: string
          },
          {
            _id: {
              $oid: mongoose.Types.ObjectId
            },
            img: string
          },
          {
            _id: {
              $oid: mongoose.Types.ObjectId
            },
            img: string
          }
        ],
        boardImage: string
}