const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
    enum: ["Wood", "Metal", "Glass", "Fabric", "Leather"],
  },
  color: {
    type: String,
    required: true,
    enum: [
      "Brown",
      "Black",
      "White",
      "Grey",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Pink",
      "Purple",
    ],
  },
  dimensions: {
    width: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  weight: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor"],
  },
  brand: {
    type: String,
    required: true,
    enum: ["Craftmaster", "Bush", "IKEA", "La-Z-Boy", "Ashley"],
  },
  image_url: {
    type: String,
    required: true,
    trim: true,
  },
  inventory: {
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    reorder_threshold: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
