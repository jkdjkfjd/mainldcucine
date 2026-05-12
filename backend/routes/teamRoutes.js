const express = require('express');
const {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require('../controllers/teamController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getTeamMembers)
  .post(protect, admin, createTeamMember);

router.route('/:id')
  .put(protect, admin, updateTeamMember)
  .delete(protect, admin, deleteTeamMember);

module.exports = router;