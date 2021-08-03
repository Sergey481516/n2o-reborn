import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from 'createdHistory';
import reducerCreator from 'reducers';
import rootSaga from 'sagas';
import { ReduxState } from 'types/reduxState';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(initialState = {}): Store<ReduxState> {
  const middleware: Array<Middleware> = [
    batchDispatchMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  let composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);

    if (
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
      /* eslint-disable no-underscore-dangle */
      composeEnhancers = composeWithDevTools;
      /* eslint-enable */
    }
  }

  const enhancers = [applyMiddleware(...middleware)];

  const store = createStore(
    reducerCreator(history),
    initialState,
    composeEnhancers(...enhancers),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
