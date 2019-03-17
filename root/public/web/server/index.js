// Setup express to handle Web requests

import compression from 'compression';
import express from 'express';
import bodyParser from 'body-parser';
// import bb from 'express-busboy';
import path from 'path';
import middleware from './middleware';
import favicon from '../app/favicon.ico';

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, (req, res) => {
  res.send(`welcome, ${req.body.username}`);
});

// POST /api/contact gets JSON bodies
app.post('/api/contact', jsonParser, (req, res) => {
  // create user in req.body
});

// Add gzip compression to responses
app.use(compression());

// Favicon
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);
app.use('/favicon.ico', (req, res) =>
  res.sendFile(path.join(__dirname, `../server/${faviconFileName}`))
);

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(`${__dirname}/../client`));

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/', middleware);

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
