// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Express
const app = express();
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port
const port = process.env.PORT || 8080;

// Routes
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
	res.send('Please use /api/pet');
});

app.listen(port);
console.log('Running on port ' + port);
