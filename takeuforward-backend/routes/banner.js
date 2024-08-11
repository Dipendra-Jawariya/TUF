const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');
const db = require('../config/db');

router.get('/get', (req, res) => {
    Banner.getBanner((err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/post', (req, res) => {
    Banner.addBanner(req.body, (err, result) => {
        console.log(req.body);
         // Send a response to the client
        
        // res.send("&quot;Data inserted successfully&quot;");
        if (err) {
            console.error(err);
            // Ensure you return or exit after sending a response to avoid further processing
            return res.status(500).json({ message: 'Database update failed', error: err });
        }
        console.log("Data has been inserted sucessfully");
        res.status(200).json({ message: 'ok' });

    });
});

module.exports = router;
