import React from 'react';
import {StaticRouter} from 'react-router-dom';

import App from '~/components/app';

const Root = ({url, context}) => {
  return (
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );
};

export default Root;
