const express = require('express');
const {
  getAllGallery,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} = require('../controllers/galleryController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getAllGallery)
  .post(protect, admin, createGalleryItem);

router.route('/:id')
  .put(protect, admin, updateGalleryItem)
  .delete(protect, admin, deleteGalleryItem);

module.exports = router;