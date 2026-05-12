const express = require('express');
const {
  getAllBeforeAfter,
  createBeforeAfter,
  updateBeforeAfter,
  deleteBeforeAfter,
} = require('../controllers/beforeAfterController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getAllBeforeAfter)
  .post(protect, admin, createBeforeAfter);

router.route('/:id')
  .put(protect, admin, updateBeforeAfter)
  .delete(protect, admin, deleteBeforeAfter);

module.exports = router;