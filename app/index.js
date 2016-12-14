const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// To Get Post params
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

// Static files directory
app.use(express.static(__dirname + '/public'));

// Setup routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
});
