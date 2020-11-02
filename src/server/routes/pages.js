/*
 * Pages Routes
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { StaticRouter } = require('react-router-dom');
const ssrComponent = require('../../../dist/server').default;

const router = express.Router();

async function renderMarkup(html) {
  return new Promise((resolve, reject) => {
    const indexFile = path.join(__dirname, '../../../dist/public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML template:', err);
        reject(new Error('Could not read HTML template'));
        return;
      }

      const markup = data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );
      resolve(markup);
    });
  });
}

/* Server side rendered page. */
router.get('/', async function handleRender(req, res, next) {
  const element = React.createElement(
    StaticRouter,
    {
      location: req.url
    },
    React.createElement(ssrComponent)
  );
  const html = ReactDOMServer.renderToString(element);

  try {
    const fullMarkup = await renderMarkup(html);
    res.status(200).send(fullMarkup);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
