import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

router.route('/lanes').post(LaneController.addLane);

localhost:8000/api/lanes
export default router;
