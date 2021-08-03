import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';

import { registerWidget } from 'actions/widgets';
import { callApi } from 'actions/api';
import { resolveModel as resolveModelAction } from 'actions/models';
import { getWidgetById } from 'selectors/widget';
import { getDatasourceModelById, getResolveModelById } from 'selectors/models';
import CrudApiProvider, {
  CrudProviderMethod,
} from 'dataProvider/CrudApiProvider';

import { WidgetProps } from './Widget';
import { CallApiOptions } from 'actions/types';
import { Widget } from 'types/reduxState';

const useWidget = <D>(props: Omit<WidgetProps, 'children'>) => {
  const {
    id,
    modelId = id,
    fetchOnInitMethod = CrudProviderMethod.GetList,
  } = props;
  const dispatch = useDispatch();
  const widget: Widget = useSelector(getWidgetById(id));
  const datasource: Array<D> = useSelector(getDatasourceModelById<D>(modelId));
  const resolveModel = useSelector(getResolveModelById(modelId));
  const dataProvider = useMemo(
    () =>
      props.dataProvider instanceof CrudApiProvider
        ? props.dataProvider
        : new CrudApiProvider(
            props.dataProvider.entity,
            omit(props.dataProvider, 'entity'),
          ),
    [],
  );

  const onFetchList = useCallback<(options: CallApiOptions) => void>(
    (options) => {
      dispatch(
        callApi(modelId, dataProvider, CrudProviderMethod.GetList, options),
      );
    },
    [dispatch, modelId, dataProvider],
  );

  const onFetchOne = useCallback<(options: CallApiOptions) => void>(
    (options) => {
      dispatch(
        callApi(modelId, dataProvider, CrudProviderMethod.GetOne, options),
      );
    },
    [dispatch, modelId, dataProvider],
  );

  const onResolve = useCallback<(model: D) => void>(
    (model) => {
      if (!isEqual(resolveModel, model)) {
        dispatch(resolveModelAction(modelId, model));
      }
    },
    [modelId, resolveModel],
  );

  useEffect(() => {
    dispatch(registerWidget(props));
  }, [dispatch]);

  useEffect(() => {
    if (widget.isInit && fetchOnInitMethod && dataProvider) {
      dispatch(callApi(modelId, dataProvider, fetchOnInitMethod));
    }
  }, [widget.isInit]);

  return {
    widget,
    datasource,
    resolveModel,
    onFetchList,
    onFetchOne,
    onResolve,
  };
};

export default useWidget;
