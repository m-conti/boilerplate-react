import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../App';
import Html from './html';

const port = 8081
const host = 'localhost'

const server = express();
const favicon = require('serve-favicon');

server.use(favicon('./public/fav.ico'));
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});
server.use('/public', express.static('dist'), express.static('public'));

server.get('*', (req, res) => {
    const body = renderToString(<App />);
    console.log(body);
    const title = 'Server Side React';
    const app = Html({
        body,
        title
    });
    res.status(200).send(app);
});

server.listen(port, () => console.log(`Serving at http://${host}:${port}`));
