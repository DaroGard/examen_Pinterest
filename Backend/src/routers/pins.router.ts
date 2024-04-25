import express from 'express';
import { getPins, getPin, getPinByTag} from '../controllers/pins.controller';

let router = express.Router();

router.get('/', getPins);
router.get('/:id', getPin);
router.get('/:id/:tags', getPinByTag);

export default router;