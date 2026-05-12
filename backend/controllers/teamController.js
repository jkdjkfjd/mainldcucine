const Team = require('../models/Team');

// @desc    Get all team members
// @route   GET /api/team
const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find({ isActive: true }).sort({ order: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create team member
// @route   POST /api/team
const createTeamMember = async (req, res) => {
  try {
    const member = await Team.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update team member
// @route   PUT /api/team/:id
const updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete team member
// @route   DELETE /api/team/:id
const deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Team member deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};