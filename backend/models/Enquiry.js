const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  email: {
    type: String,
    required: [true, 'Please add email'],
  },
  phone: {
    type: String,
    required: [true, 'Please add phone'],
  },
  service: {
    type: String,
    enum: ['Modular Kitchen', 'Wardrobe', 'Vanity', 'Bar Unit', 'Doors', 'Wall Paneling', 'Turnkey Project', 'Other'],
    required: true,
  },
  message: String,
  budget: String,
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enquiry', enquirySchema);