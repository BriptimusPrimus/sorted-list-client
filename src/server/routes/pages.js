/*
 * Pages Routes
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const serialize = require('serialize-javascript');
const ssrComponentTree = require('../../../dist/server').default;

const router = express.Router();

async function renderMarkup(html, initialState) {
  return new Promise((resolve, reject) => {
    const indexFile = path.join(__dirname, '../../../dist/public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML template:', err);
        reject(new Error('Could not read HTML template'));
        return;
      }

      const markup = data
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace(
          '<script data-role="initial-state"></script>',
          `<script>window.__INITIAL_STATE__ = ${serialize(initialState, {
            isJSON: true
          })}</script>`
        );
      resolve(markup);
    });
  });
}

/* Server side rendered page. */
const handleRender = async function handleRender(req, res, next) {
  const { sort, order } = req.query;
  const defaultSortColumn = {
    '/list': 'codeNumber',
    '/customers': 'email'
  };
  const loadDataParams = {
    sortBy: {
      column: sort || defaultSortColumn[req.path] || 'codeNumber',
      orderDesc: order === 'DESC'
    }
  };

  try {
    const { html, initialState } = await ssrComponentTree({
      url: req.url,
      path: req.path,
      loadDataParams
    });
    const fullMarkup = await renderMarkup(html, initialState);
    res.status(200).send(fullMarkup);
  } catch (err) {
    next(err);
  }
};

router.get('/list', handleRender);
router.get('/customers', handleRender);

module.exports = router;
