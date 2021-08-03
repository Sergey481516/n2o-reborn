import { ResolveModelAction, SetModelAction } from 'actions/types';
import { ModelType } from 'constants/ModelType';
import { ModelsActionType } from 'constants/models';

export function setModel(
  prefix: ModelType,
  modelId: string,
  model: any,
): SetModelAction {
  return {
    type: ModelsActionType.Set,
    payload: {
      prefix,
      modelId,
      model,
    },
  };
}

export function resolveModel(modelId: string, model: any): ResolveModelAction {
  return {
    type: ModelsActionType.Resolve,
    payload: {
      prefix: ModelType.Resolve,
      modelId,
      model,
    },
  };
}
