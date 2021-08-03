import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import isFunction from 'lodash/isFunction';

import { CallApiAction } from 'actions/types';
import { setModel } from 'actions/models';
import { ApiActionType } from 'constants/api';
import { ModelType } from 'constants/ModelType';

function* apiSaga({ payload }: CallApiAction) {
  const {
    modelId,
    dataProvider,
    providerMethod,
    onSuccess,
    onError,
    ...requestConfig
  } = payload;

  try {
    const response: AxiosResponse = yield dataProvider[providerMethod](
      requestConfig,
    );

    yield put(setModel(ModelType.Datasource, modelId, response.data));

    if (isFunction(onSuccess)) {
      onSuccess(response.data, modelId);
    }

    return response;
  } catch (err: ReferenceError | unknown) {
    if (isFunction(onError)) {
      onError(err as any);
    }
  } finally {
  }
}

export default [takeEvery(ApiActionType.CallApi, apiSaga)];
