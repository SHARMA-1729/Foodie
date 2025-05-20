import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  menu: [
    {
      category: {
        type: String,
        required: true,
      },
      items: [
        {
          type: mongoose.Schema.Types.ObjectId,
          // ref: 'Item',
        },
      ],
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: false, // Ensures the ID is provided and not auto-generated
      }
    }
  ],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  }
}, {
  versionKey: false // Disables the __v field
});

export const MenuItem = mongoose.model("Menu", menuSchema);
