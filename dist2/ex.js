const express = require('express');
const micro = require('micro');
const { send } = require('micro');
const { router, get } = require('microrouter');
const path = require('path');
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static files from the '_expo' directory
app.use('/_expo', express.static(path.join(__dirname, '_expo')));

// Serve the 'index.html' file for all routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const server = micro(app);
module.exports = server;
