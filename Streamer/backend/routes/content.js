const express = require('express');
const { addContent, getContent, updateContent, deleteContent } = require('../controllers/contentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addContent);
router.get('/', getContent);
router.put('/:id', auth, updateContent);
router.delete('/:id', auth, deleteContent);

module.exports = router;
