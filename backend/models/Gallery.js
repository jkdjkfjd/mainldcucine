const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['modular-kitchen', 'wardrobe', 'vanity', 'bar-unit', 'lcd-unit', 'doors', 'wall-paneling', 'turnkey-interior-projects'],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: String,
  isFeatured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gallery', gallerySchema);