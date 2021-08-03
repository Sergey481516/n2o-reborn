import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import Application from 'components/Application';
import Router from 'components/Router';

import { N2OContextType } from 'types/N2OContextType';

export interface N2OProps {
  defaultBreadcrumb?: React.ReactNode | null;
  children: React.ReactNode;
}

const N2OContext = React.createContext<N2OContextType>({});
const store = configureStore({});

function N2O({ children }: N2OProps): JSX.Element {
  return (
    <Provider store={store}>
      <N2OContext.Provider value={{}}>
        <Application>
          <Router>{children}</Router>
        </Application>
      </N2OContext.Provider>
    </Provider>
  );
}

export default N2O;
