"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoardPinsDetails = exports.getBoard = exports.getBoards = void 0;
const board_schema_1 = require("../models/board.schema");
const getBoards = (req, res) => {
    board_schema_1.BoardSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getBoards = getBoards;
const getBoard = (req, res) => {
    board_schema_1.BoardSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getBoard = getBoard;
const getBoardPinsDetails = (req, res) => {
    const boardId = req.params.id;
    board_schema_1.BoardSchema.findById(boardId)
        .then((board) => {
        if (board) {
            const pinsArray = board.pins;
            res.send(pinsArray);
        }
        else {
            res.status(404).send("Board not found");
        }
    })
        .catch((error) => console.error(error))
        .finally(() => res.end());
};
exports.getBoardPinsDetails = getBoardPinsDetails;
