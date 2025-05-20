// In fooditem.controller.js

import { FoodItem } from '../models/fooditem.model.js'; // Ensure .js extension is included

// Fetch all food items
const getAllFoodItems = async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.status(200).json({
            success: true,
            data: foodItems,
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
const getFoodItemById = async (req, res) => {
    try {
        const foodItem = await FoodItem.findById(req.params.id);

        if (!foodItem) {
            return res.status(404).json({
                success: false,
                message: 'Food item not found',
            });
        }

        res.status(200).json({
            success: true,
            data: foodItem,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};

export { getAllFoodItems, getFoodItemById };
