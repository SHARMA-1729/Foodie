import mongoose from "mongoose";
const foodItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  ratings: Number,
  images: [
    {
      public_id: String,
      url: String,
    },
  ],
  stock: Number,
  numOfReviews: Number,
  reviews: [
    {
      name: String, // changed from `user` to `name` for consistency
      comment: String,
      rating: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodItem = mongoose.model("fooditem", foodItemSchema);
