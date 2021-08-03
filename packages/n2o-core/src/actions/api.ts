import { AxiosResponse } from 'axios';

import { RequestError } from 'dataProvider';
import { ApiActionType } from 'constants/api';

import { CallApiAction, CallApiOptions } from './types';
import { IRequestConfig } from 'types/IRequestConfig';

export function callApi(
  modelId: string,
  dataProvider: any,
  providerMethod: string,
  options: CallApiOptions = {},
): CallApiAction {
  return {
    type: ApiActionType.CallApi,
    payload: {
      ...options,
      dataProvider,
      providerMethod,
      modelId,
    },
  };
}
