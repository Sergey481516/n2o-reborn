import { createSelector } from 'reselect';
import get from 'lodash/get';

import { ReduxState, Widget } from 'types/reduxState';
import emptyObject from '../utils/emptyObject';

export function getWidgets(state: ReduxState) {
  return get(state, 'widgets', emptyObject);
}

export function getWidgetById(id: string) {
  return createSelector<ReduxState, ReturnType<typeof getWidgets>, Widget>(
    getWidgets,
    (widgets) => get(widgets, id, emptyObject),
  );
}
