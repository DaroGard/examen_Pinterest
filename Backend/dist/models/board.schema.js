"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    boardTitle: String,
    pins: [
        {
            _id: {
                $oid: mongoose_1.default.Types.ObjectId
            },
            img: String
        },
        {
            _id: {
                $oid: mongoose_1.default.Types.ObjectId
            },
            img: String
        },
        {
            _id: {
                $oid: mongoose_1.default.Types.ObjectId
            },
            img: String
        },
        {
            _id: {
                $oid: mongoose_1.default.Types.ObjectId
            },
            img: String
        },
        {
            _id: {
                $oid: mongoose_1.default.Types.ObjectId
            },
            img: String
        }
    ],
    boardImage: String
});
exports.BoardSchema = mongoose_1.default.model('boards', schema);
