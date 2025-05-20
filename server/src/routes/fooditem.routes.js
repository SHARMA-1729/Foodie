import express from 'express';
const router = express.Router();

import { getAllFoodItems, getFoodItemById } from '../controllers/fooditem.controller.js';

router.get('/fooditems', getAllFoodItems);
router.get('/fooditems/:id', getFoodItemById);

export default router;
