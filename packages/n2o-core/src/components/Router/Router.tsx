import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from 'createdHistory';
import Layout from 'components/Layout';

export interface IRouter {
  children: React.ReactNode;
}

function Router({ children }: IRouter): JSX.Element {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>{children}</Switch>
      </Layout>
    </ConnectedRouter>
  );
}

export default Router;
