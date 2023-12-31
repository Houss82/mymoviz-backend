var express = require('express');
var router = express.Router();
const keyAPI = process.env.OWM_API_KEY;


// deniere modif
router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyAPI}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies : 
             data.results});
});
});

module.exports = router;
