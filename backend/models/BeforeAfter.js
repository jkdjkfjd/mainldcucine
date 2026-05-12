const mongoose = require('mongoose');

const beforeAfterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Kitchen', 'Wardrobe', 'Living Room', 'Vanity', 'Door'],
    required: true,
  },
  beforeImage: {
    type: String,
    required: true,
  },
  afterImage: {
    type: String,
    required: true,
  },
  description: String,
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BeforeAfter', beforeAfterSchema);