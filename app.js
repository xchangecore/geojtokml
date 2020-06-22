const express = require('express');
const toKml = require('tokml');
const logger = require('./logger');
require('dotenv').config();

const app = express();

app.use(express.json({limit: "2000mb"}));

app.post('/to_kml', (req, res) => {
    const geoGJSON = req.body; 
    try {
        const kml = toKml(geoGJSON);
        res.set('Content-Type', 'application/xml');
        res.send(kml);
    } catch (e) {
        logger.error(e);
        res.status(500).send(e);
    } 
});

const port = process.env.PORT;
app.listen(port, () => {
    logger.info("GeoJSON to KML service started on port: " + port);
});



