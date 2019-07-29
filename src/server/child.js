const path = require('path');
const fs = require('fs');
const express = require('express');
const http = require('http');

const childAppPath = path.join(__dirname, '..', '..', 'assets', 'child.html');
const childJSPath = path.join(__dirname, '..', '..', 'assets', 'js', 'child.js');

const port = 8000;

/**
 * Create the express apps
 * Set them to serve static assets from the assets directories
 */
const childApp = express();

childApp.get('/js/child.js', (req, res) => {
    fs.readFile(childJSPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

childApp.get('*', (req, res) => {
    fs.readFile(childAppPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

const childServer = http.createServer(childApp);

childServer.listen(port);
console.log(`childServer running on http://localhost:${port}...`);
