"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pings_controller_1 = require("../controllers/pings.controller");
let router = express_1.default.Router();
router.get('/', pings_controller_1.getPings);
router.get('/:id', pings_controller_1.getPing);
router.get('/:id/:tags', pings_controller_1.getPingByTag);
exports.default = router;
