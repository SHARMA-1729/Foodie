import express from 'express';
const router = express.Router();
import {getAllRestaurants, getRestaurantById} from '../controllers/restaurant.controller.js';

router.get('/restaurant', getAllRestaurants);
router.get('/restaurant/:id', getRestaurantById);

export default router;