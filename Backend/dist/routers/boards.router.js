"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boards_controller_1 = require("../controllers/boards.controller");
let router = express_1.default.Router();
router.get('/', boards_controller_1.getBoards);
router.get('/:id', boards_controller_1.getBoard);
router.get('/:id/pins', boards_controller_1.getBoardPinsDetails);
exports.default = router;
