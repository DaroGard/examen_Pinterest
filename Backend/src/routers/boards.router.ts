import express from 'express';
import { getBoards, getBoard, getBoardPinsDetails} from '../controllers/boards.controller';

let router = express.Router();

router.get('/', getBoards);
router.get('/:id', getBoard);
router.get('/:id/pins', getBoardPinsDetails);

export default router;