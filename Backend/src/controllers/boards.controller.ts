import { Request, Response } from "express";
import { Board } from "../models/board.model"; 
import { BoardSchema } from "../models/board.schema"; 

export const getBoards = (req: Request, res: Response) => {
    BoardSchema.find()
    .then((result:Array<Board>) =>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}

export const getBoard = (req: Request, res: Response) => {
    BoardSchema.findOne({_id: req.params.id})
    .then((result:Board|null)=>{
        res.send(result);
        res.end();
    })
    .catch((error:any) => console.error(error));
}

export const getBoardPinsDetails = (req: Request, res: Response) => {
    const boardId = req.params.id;

    BoardSchema.findById(boardId)
        .then((board: Board | null) => {
            if (board) {
                const pinsArray = board.pins;
                res.send(pinsArray);
            } else {
                res.status(404).send("Board not found");
            }
        })
        .catch((error: any) => console.error(error))
        .finally(() => res.end());
}