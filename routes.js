const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get("/login", (req, res) => {
    res.render('login.ejs');
});

module.exports = router;