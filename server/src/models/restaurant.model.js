import mongoose from "mongoose";

// Define the Restaurant Schema
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  isVeg: {
    type: Boolean,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  ratings: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: function (value) {
          return value.length === 2;
        },
        message: 'Coordinates should include both longitude and latitude.'
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

RestaurantSchema.index({ location: '2dsphere' });

// Export the model using ES Modules syntax
export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
