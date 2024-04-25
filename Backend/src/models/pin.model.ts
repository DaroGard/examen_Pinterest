import mongoose from "mongoose";

export interface Pin{
        title: string,
        description: string,
        likes: number,
        tags: Array<string>,
        img: string
}