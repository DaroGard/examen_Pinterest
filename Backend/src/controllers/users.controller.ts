import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserSchema } from "../models/user.schema";

export const getUsers = (req: Request, res: Response) => {
    UserSchema.find()
    .then((result:Array<User>) =>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}

export const getUser = (req: Request, res: Response) => {
    UserSchema.findOne({_id: req.params.id})
    .then((result:User|null)=>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}