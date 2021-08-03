import { Action } from 'redux';
import { AxiosResponse } from 'axios';

import { RequestError } from 'dataProvider';
import { WidgetActionType } from 'constants/widgets';
import { WidgetProps } from 'components/Widget/Widget';
import { ApiActionType } from 'constants/api';
import { ModelsActionType } from 'constants/models';
import { ModelType } from 'constants/ModelType';

import { IRequestConfig } from 'types/IRequestConfig';

// Widget Actions
export interface RegisterWidgetActionPayload
  extends Omit<WidgetProps, 'children'> {}
export interface RegisterWidgetAction
  extends Action<WidgetActionType.Register> {
  payload: RegisterWidgetActionPayload;
}
export interface ChangeSizeAction extends Action<WidgetActionType.ChangeSize> {
  payload: {
    id: string;
    size: number;
  };
}
export interface ChangePageAction extends Action<WidgetActionType.ChangePage> {
  payload: {
    id: string;
    page: number;
  };
}
export type WidgetsActions =
  | RegisterWidgetAction
  | ChangeSizeAction
  | ChangePageAction;
// Api Actions
export interface CallApiOptions extends IRequestConfig {
  onSuccess?: (data: any, modelId: string) => void;
  onError?: (error: RequestError) => void;
}
export interface CallApiPayload extends CallApiOptions {
  modelId: string;
  dataProvider: any;
  providerMethod: string;
}
export interface CallApiAction extends Action<ApiActionType.CallApi> {
  payload: CallApiPayload;
}

// Model Actions
export interface SetModelAction extends Action<ModelsActionType.Set> {
  payload: {
    prefix: ModelType;
    modelId: string;
    model: any;
  };
}
export interface ResolveModelAction extends Action<ModelsActionType.Resolve> {
  payload: {
    prefix: ModelType.Resolve;
    modelId: string;
    model: any;
  };
}
export interface RemoveModelAction extends Action<ModelsActionType.Remove> {
  payload: {
    prefix: ModelType;
    modelId: string;
  };
}
export interface UpdateModelAction extends Action<ModelsActionType.Update> {
  payload: {
    prefix: ModelType;
    modelId: string;
    field: string;
    value: any;
  };
}
export interface MergeModelAction extends Action<ModelsActionType.Merge> {
  payload: {
    prefix: ModelType;
    modelId: string;
    model: Record<string, any>;
  };
}
export type ModelsActions =
  | SetModelAction
  | RemoveModelAction
  | UpdateModelAction
  | MergeModelAction;
