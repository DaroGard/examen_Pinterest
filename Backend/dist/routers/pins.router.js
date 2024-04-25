"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pins_controller_1 = require("../controllers/pins.controller");
let router = express_1.default.Router();
router.get('/', pins_controller_1.getPins);
router.get('/:id', pins_controller_1.getPin);
router.get('/:id/:tags', pins_controller_1.getPinByTag);
exports.default = router;
