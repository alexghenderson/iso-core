/* istanbul ignore file */
// TODO: Set up tests for the server
import '@babel/polyfill';
import path from 'path';
import express from 'express';

import logRequest from '~/server/middleware/logging';
import ssr from '~/server/middleware/ssr';

const port = process.env.PORT || 3000;

const app = express();

app.use(logRequest());

app.use('/static', express.static(path.join(__dirname, '/static')));

app.use(
  ssr(path.resolve(__dirname, 'index.html'))
);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${port}`);
});
