const Gallery = require('../models/Gallery');

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
const getAllGallery = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filter = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (featured === 'true') {
      filter.isFeatured = true;
    }
    
    const items = await Gallery.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryItemById = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({ 
        success: false, 
        message: 'Gallery item not found' 
      });
    }
    
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Get gallery by category
// @route   GET /api/gallery/category/:category
// @access  Public
const getGalleryByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const items = await Gallery.find({ 
      category: category,
      isActive: true 
    }).sort({ order: 1 });
    
    res.json({
      success: true,
      category: category,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Create gallery item
// @route   POST /api/gallery
// @access  Private/Admin
const createGalleryItem = async (req, res) => {
  try {
    const { title, category, image, description, isFeatured, order } = req.body;
    
    if (!title || !category || !image) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide title, category and image' 
      });
    }
    
    const item = await Gallery.create({
      title,
      category,
      image,
      description,
      isFeatured: isFeatured || false,
      order: order || 0
    });
    
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private/Admin
const updateGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({ 
        success: false, 
        message: 'Gallery item not found' 
      });
    }
    
    const updatedItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: updatedItem
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({ 
        success: false, 
        message: 'Gallery item not found' 
      });
    }
    
    await item.deleteOne();
    
    res.json({
      success: true,
      message: 'Gallery item deleted successfully'
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Bulk upload gallery items
// @route   POST /api/gallery/bulk
// @access  Private/Admin
const bulkUploadGallery = async (req, res) => {
  try {
    const items = req.body.items;
    
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide an array of items' 
      });
    }
    
    const createdItems = await Gallery.insertMany(items);
    
    res.status(201).json({
      success: true,
      count: createdItems.length,
      data: createdItems
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
};

module.exports = {
  getAllGallery,
  getGalleryItemById,
  getGalleryByCategory,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  bulkUploadGallery,
};