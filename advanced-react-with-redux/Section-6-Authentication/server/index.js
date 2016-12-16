const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

// App setup

//both morgan and body parsers are middlewares, with 'app.use' we are registering them on the app
app.use(morgan('combined')); //logging middleware
app.use(bodyParser.json({ type: '*/*'})); // used to parse incoming requests into json 
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);