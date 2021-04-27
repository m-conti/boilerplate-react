import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'App';
import html from 'server/html';
import webpack from 'webpack';
import webpackConfig from 'webpack.config';


const port = 8081;
const host = 'localhost';

const server = express();
const favicon = require('serve-favicon');

server.use(favicon('./public/fav.ico'));
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

server.use('/public', express.static('dist'), express.static('public'));
server.use(require('webpack-hot-middleware')(webpack(webpackConfig)));

console.log('SERVER SIDE IS LOADING');

server.get('*', (req, res) => {
  const body = renderToString(<App serverSide />);
  const title = 'Server Side React';
  const app = html({
    body,
    title,
  });
  res.status(200).send(app);
});

server.listen(port, () => console.log(`Serving at http://${host}:${port}`));
