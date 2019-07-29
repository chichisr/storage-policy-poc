const path = require('path');
const fs = require('fs');
const express = require('express');
const http = require('http');

const parentAppPath = path.join(__dirname, '..', '..', 'assets', 'index.html');
const parentJSPath = path.join(__dirname, '..', '..', 'assets', 'js', 'parent.js');

const port = 8080;

/**
 * Create the express apps
 * Set them to serve static assets from the assets directories
 */
const parentApp = express();

parentApp.get('/js/parent.js', (req, res) => {
    fs.readFile(parentJSPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

parentApp.get('*', (req, res) => {
    fs.readFile(parentAppPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

const parentServer = http.createServer(parentApp);

parentServer.listen(port);
console.log(`parentServer running on http://127.0.0.1:${port}...`);
