/*
 * Server Side Render
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from './routes';
import App from './containers/App';

/* Resolves server side rendered markup and state. */
const ssrComponentTree = async function ssrComponentTree({
  url,
  path,
  loadDataParams
}) {
  const curRoute = routes.find(route => {
    return matchPath(path, route);
  });

  const preloadedState =
    curRoute && curRoute.component && curRoute.component.loadData
      ? await curRoute.component.loadData(loadDataParams)
      : {};

  const initialState = {
    ...loadDataParams,
    ...preloadedState
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
