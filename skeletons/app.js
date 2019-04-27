import React from 'react';
import Helmet from 'react-helmet';

import Routes from '~/routes';

const App = () => {
  return (
      <React.Fragment>
        <Helmet titleTemplate="%s | Hello World!" defaultTitle="Hello World!" />
        <Routes />
      </React.Fragment>
  );
};

export default App;
