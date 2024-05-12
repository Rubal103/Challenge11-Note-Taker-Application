const router = require('express').Router();
const path = require('path');


//route that will takes the user to page index.html when get request (/) is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//route that will takes the user to page notes.html when get request (/notes) is made

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;