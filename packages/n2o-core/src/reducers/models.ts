import assign from 'lodash/assign';
import get from 'lodash/get';
import omit from 'lodash/omit';

import emptyObject from 'utils/emptyObject';
import { ModelsActions } from 'actions/types';
import { ModelType } from 'constants/ModelType';
import { ModelsActionType } from 'constants/models';

import { Model, Models } from 'types/reduxState';

const modelsState: Models = {
  [ModelType.Datasource]: {},
  [ModelType.Resolve]: {},
  [ModelType.MultiResolve]: [],
  [ModelType.Filter]: {},
};

function resolveUpdate(state: Model, action: ModelsActions) {}

function resolve(state: Model, action: ModelsActions) {
  switch (action.type) {
    case ModelsActionType.Set:
      return assign({}, state, {
        [action.payload.modelId]: action.payload.model,
      });
    case ModelsActionType.Remove:
      return omit(state, action.payload.modelId);
    case ModelsActionType.Update:
      return assign({}, state, {
        [action.payload.modelId]: resolveUpdate(state, action),
      });
    case ModelsActionType.Merge:
      return assign({}, state, {
        [action.payload.modelId]: action.payload.model,
      });
    default:
      return state;
  }
}

export default function modelsReducer(
  state = modelsState,
  action: ModelsActions,
) {
  switch (action.type) {
    case ModelsActionType.Set:
    case ModelsActionType.Remove:
    case ModelsActionType.Update:
    case ModelsActionType.Merge:
      return assign({}, state, {
        [action.payload.prefix]: resolve(
          get(state, action.payload.prefix, emptyObject),
          action,
        ),
      });

    default:
      return state;
  }
}
