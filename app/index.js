const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// To Get Post params
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

// Static files directory
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
});
