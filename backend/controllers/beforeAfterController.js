const BeforeAfter = require('../models/BeforeAfter');

const getAllBeforeAfter = async (req, res) => {
  try {
    const items = await BeforeAfter.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBeforeAfter = async (req, res) => {
  try {
    const item = await BeforeAfter.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBeforeAfter = async (req, res) => {
  try {
    const item = await BeforeAfter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBeforeAfter = async (req, res) => {
  try {
    await BeforeAfter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllBeforeAfter,
  createBeforeAfter,
  updateBeforeAfter,
  deleteBeforeAfter,
};