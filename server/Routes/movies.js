// Routes for movies from TMDB API
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get list of popular movies
app.get('/movies/popular', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: process.env.API_KEY
            }
        });
        res.send(response.data.results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;