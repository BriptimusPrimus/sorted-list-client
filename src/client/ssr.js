/*
 * Server Side Render
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from './routes';
import App from './containers/App';

/* Resolves server side rendered markup and state. */
const ssrComponentTree = async function ssrComponentTree(url, path) {
  const curRoute = routes.find(route => {
    return matchPath(path, route);
  });

  const data = curRoute && curRoute.component && curRoute.component.loadData ?
    await curRoute.component.loadData() :
    {};

  const initialState = {
    data
  };

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App initialState={initialState} />
    </StaticRouter>
  );

  return {
    html,
    initialState
  };
};

export default ssrComponentTree;
