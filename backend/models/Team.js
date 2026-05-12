const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  designation: {
    type: String,
    required: [true, 'Please add designation'],
    enum: ['Architect', '3D Designer', 'Interior Worker', 'Installer', 'IT Web & App Developer', 'Project Manager'],
  },
  category: {
    type: String,
    enum: ['Leadership', 'Design', 'Technical', 'Development', 'Installation'],
    required: true,
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300',
  },
  bio: String,
  experience: Number,
  socialLinks: {
    linkedin: String,
    instagram: String,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Team', teamSchema);