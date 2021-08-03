import { createSelector } from 'reselect';
import get from 'lodash/get';

import emptyObject from 'utils/emptyObject';

import { ReduxState, Model } from 'types/reduxState';
import { ModelType } from '../constants/ModelType';

export function getModels(state: ReduxState) {
  return get(state, 'models', emptyObject);
}

export function getDatasourceModelById<D>(modelId: string) {
  return createSelector<ReduxState, ReturnType<typeof getModels>, Array<D>>(
    getModels,
    (models) => {
      return get(models, [ModelType.Datasource, modelId]);
    },
  );
}

export function getResolveModelById(modelId: string) {
  return createSelector<ReduxState, ReturnType<typeof getModels>, Model>(
    getModels,
    (models) => get(models, [ModelType.Resolve, modelId], emptyObject),
  );
}

export function getModelByLink(modelLink: Array<string> | string) {
  return createSelector<ReduxState, ReturnType<typeof getModels>, Model>(
    getModels,
    (models) => get(models, modelLink, emptyObject),
  );
}
