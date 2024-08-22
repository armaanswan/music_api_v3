const { db } = require('../config/firebase');
const Song = require('../models/songModel');

// Fetch all songs and return them as JSON
const getSongs = async (req, res) => {
    try {
        const songsSnapshot = await db.collection('songs').get();
        const songs = songsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Fetch a single song by ID and return it as JSON
const getSongById = async (req, res) => {
    try {
        const songId = req.params.id;
        const songDoc = await db.collection('songs').doc(songId).get();
        if (!songDoc.exists) {
            return res.status(404).send('Song not found!');
        }
        res.status(200).json(songDoc.data());
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add a new song to the database
const addSong = async (req, res) => {
    try {
        const { title, artist, lyrics, album } = req.body; // TODO: Change this
        const song = new Song(title, artist, lyrics, album);
        await db.collection('songs').add(song.toJSON());
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getSongs,
    getSongById,
    addSong,
};
