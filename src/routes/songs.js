const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

// Route to get all songs
router.get('/', songsController.getSongs);

// Route to get a song by ID
router.get('/:id', songsController.getSongById);

// Route to add a new song
router.post('/', songsController.addSong);

module.exports = router;
