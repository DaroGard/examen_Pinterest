"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
var cors = require('cors');
const users_router_1 = __importDefault(require("./routers/users.router"));
const pins_router_1 = __importDefault(require("./routers/pins.router"));
const boards_router_1 = __importDefault(require("./routers/boards.router"));
const database_1 = require("./utils/database");
dotenv_1.default.config();
const db = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors());
app.use(express_1.default.json());
app.use('/users', users_router_1.default);
app.use('/pins', pins_router_1.default);
app.use('/boards', boards_router_1.default);
app.listen(port, () => {
    console.log('[Server]: Servidor corriendo');
});
