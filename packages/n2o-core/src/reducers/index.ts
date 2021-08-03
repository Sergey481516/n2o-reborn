import { CombinedState, combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import modelsReducer from './models';
import widgetsReducer from './widgets';
import { ReduxState } from 'types/reduxState';

export default function reducerCreator(
  history: History,
): Reducer<CombinedState<ReduxState>> {
  return combineReducers<ReduxState>({
    router: connectRouter(history) as Reducer,
    models: modelsReducer as any,
    widgets: widgetsReducer,
  });
}
