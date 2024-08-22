const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json
app.use(express.static(path.join(__dirname, '../public/static'))); // Serve static files

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/static/addSong.html'));
});

// Routes
const songsRouter = require('./routes/songs');
app.use('/songs', songsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
