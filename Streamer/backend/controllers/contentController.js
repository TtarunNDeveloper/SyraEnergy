const Content = require('../models/Content');

const addContent = async (req, res) => {
  const { title, description, platform } = req.body;
  try {
    const newContent = new Content({ title, description, platform });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: 'Error adding content' });
  }
};

const getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content' });
  }
};

const updateContent = async (req, res) => {
  const { id } = req.params;
  const { title, description, platform } = req.body;
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      id,
      { title, description, platform },
      { new: true }
    );
    res.json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating content' });
  }
};

const deleteContent = async (req, res) => {
  const { id } = req.params;
  try {
    await Content.findByIdAndDelete(id);
    res.json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content' });
  }
};

module.exports = { addContent, getContent, updateContent, deleteContent };
