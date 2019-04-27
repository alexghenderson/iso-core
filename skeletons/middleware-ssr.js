import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

import Html from '~/components/html';
import Root from '~/root/server';

const ssr = indexPath => {
  return async (req, res) => {
    const scriptTags = fs.readFileSync(indexPath, 'utf-8');
    const context = {
      status: status => {
        res.status(status);
      },
    };
    const App = <Root url={req.url} context={context} />;
    const initialState = {}; // Load initial state into this
    const helmet = Helmet.renderStatic();
    const rendered = ReactDOM.renderToString(
      <Html
        helmet={helmet}
        scriptTags={scriptTags}
        scriptContent={`window.__INITIAL_STATE__=${JSON.stringify(
          initialState
        ).replace(/</g, '\\u003c')}`}
      >
        {App}
      </Html>
    );
    switch (context.action) {
      case 'REPLACE':
        return res.redirect(context.url);
      default:
        res.send(`<!DOCTYPE html>${rendered}`);
    }
  };
};

export default ssr;
