// Setup express to handle Web requests

import compression from 'compression';
import express from 'express';
import path from 'path';
import middleware from './middleware';
//import cors from 'cors';
//import nodemailer from 'nodemailer';
import favi from './favicon.png';
import llog from 'llog';
//import bodyParser from 'body-parser'
//import sendEmail from '../app/mailer'

const app = express();

// Add gzip compression to responses
app.use(compression());

// Favicon
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'dist', favi)))

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(`${__dirname}/../client`));

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/*', middleware);

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 1234;
app.listen(port, () => {
  llog(`Listening on port ${port}...`);
  llog(`Go to http://127.0.0.1:${port}...`);
});
