const express = require('express');
const {
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} = require('../controllers/enquiryController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', createEnquiry);
router.get('/', protect, admin, getAllEnquiries);
router.put('/:id', protect, admin, updateEnquiryStatus);
router.delete('/:id', protect, admin, deleteEnquiry);

module.exports = router;