// In fooditem.controller.js

import { MenuItem } from '../models/menu.model.js'; // Ensure .js extension is included
import { Item } from '../models/item.model.js'; 
// Fetch all food items
const getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json({
            success: true,
            data: menuItems,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};





// Fetch a single food item by ID
// const getMenuItemById = async (req, res) => {
//     try {
//         const menuItems = await MenuItem.findOne({restaurant : req.params.id})
//         ;

//         if (!menuItems) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Food item not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: menuItems,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Server Error',
//             error: error.message,
//         });
//     }
// };

const getMenuItemById = async (req, res) => {
    try {
        const menuItems = await MenuItem.findOne({ restaurant: req.params.id })
            .populate('menu.items')
            .populate('restaurant');

        if (!menuItems) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found for the restaurant',
            });
        }

        res.status(200).json({
            success: true,
            data: menuItems,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};


export {getMenuItemById,getAllMenuItems};

