import express from 'express';
const router = express.Router();

import { getMenuItemById,getAllMenuItems} from '../controllers/menu.controller.js';


router.get('/menuitems/:id', getMenuItemById);
router.get('/menuitems', getAllMenuItems);

export default router;
