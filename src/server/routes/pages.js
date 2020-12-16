/*
 * Pages Routes
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const serialize = require('serialize-javascript');
const ssrComponentTree = require('../../../dist/server').default;
const { mainPage } = require('../../../config');

const router = express.Router();

const renderMarkup = async function renderMarkup(html, initialState) {
  return new Promise((resolve, reject) => {
    const indexFile = path.join(__dirname, `../../../${mainPage}`);
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
};

/* Server side rendered page. */
const handleRender = async function handleRender({
  req,
  res,
  next,
  loadDataParams
}) {
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

router.get('/list', function renderList(req, res, next) {
  const { sort, order } = req.query;
  const loadDataParams = {
    sortBy: {
      column: sort || 'codeNumber',
      orderDesc: order === 'DESC'
    }
  };
  handleRender({ req, res, next, loadDataParams });
});

router.get('/customers', function renderCustomers(req, res, next) {
  const { sort, order } = req.query;
  const loadDataParams = {
    sortBy: {
      column: sort || 'id',
      orderDesc: order === 'DESC'
    }
  };
  handleRender({ req, res, next, loadDataParams });
});

router.get('/customer/:id', function renderCustomerDetails(req, res, next) {
  const { id } = req.params;
  handleRender({ req, res, next, loadDataParams: { customerId: id } });
});

router.get('/details', function renderCustomerDetails(req, res, next) {
  const { id } = req.query;
  handleRender({ req, res, next, loadDataParams: { customerId: id } });
});

module.exports = router;
