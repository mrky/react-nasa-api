require('dotenv').config(); 

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const NASA_API_KEY = process.env.NASA_API_KEY;

app.use(cors());

app.get('/apod', (req, res) => {
    const getRandom = req.query.random;
    let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    if (getRandom) {
        nasaUrl += "&count=1";
    }

    axios.get(nasaUrl)
        .then((response) => {
            res.send(getRandom ? response.data[0] : response.data);
        }).catch((e) => {
            console.error('error', e);
            res.status(e.status || 500).send({
                message: e.message || "An unexpected error occurred"
            });
        });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});