// item.model.js

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  image: {
    type: String
  }
}, {
  versionKey: false // Optional: Disables the __v field
});

export const Item = mongoose.model('Item', itemSchema);
