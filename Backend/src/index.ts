import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var cors = require('cors');
import userRouter from './routers/users.router';
import pinRouter from './routers/pins.router';
import boardRouter from './routers/boards.router';

import { Database } from "./utils/database";

dotenv.config();
const db:Database = new Database();
const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/pins', pinRouter);
app.use('/boards', boardRouter);


app.listen(port, () => {
    console.log('[Server]: Servidor corriendo');
})