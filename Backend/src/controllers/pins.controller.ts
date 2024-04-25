import { Request, Response } from "express";
import { Pin } from "../models/pin.model"; 
import { PinSchema } from "../models/pin.schema"; 

export const getPins = (req: Request, res: Response) => {
    PinSchema.find()
    .then((result:Array<Pin>) =>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}

export const getPin = (req: Request, res: Response) => {
    PinSchema.findOne({_id: req.params.id})
    .then((result:Pin|null)=>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}

export const getPinByTag = (req: Request, res: Response) => {
    PinSchema.find({tags: req.params.tags})
    .then((result:Array<Pin>) =>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}