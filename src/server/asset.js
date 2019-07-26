const path = require('path');
const fs = require('fs');
const express = require('express');
const http = require('http');

const assetDir = path.join(__dirname, '..', '..', 'assets');

const port = 3000;

/**
 * Create the express apps
 * Set them to serve static assets from the assets directories
 */
const assetApp = express();
assetApp.use(express.static(assetDir));

const assetServer = http.createServer(assetApp);
assetServer.listen(port);
console.log(`assetServer running on http://localhost:${port}...`);
