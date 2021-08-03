import React, { useMemo } from 'react';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import useWidget from './useWidget';
import CrudApiProvider, {
  CrudPaths,
  CrudProviderMethod,
} from 'dataProvider/CrudApiProvider';

import { Widget } from 'types/reduxState';

export interface CrudProviderSettings {
  entity: string;
  path?: string;
  idPlaceholder?: string;
  crudPaths?: CrudPaths;
}

export interface WidgetProps {
  pageId: string;
  id: string;
  modelId?: string;
  fetchOnInitMethod?: string | CrudProviderMethod;
  dataProvider: CrudApiProvider | CrudProviderSettings;
  visible?: boolean;
  sorting?: Record<string, any>;
  children: React.ReactElement;
}

export interface WidgetChildrenProps<D> {
  widget: Widget;
  datasource: Array<D>;
  onResolve: (model: D) => void;
  [key: string]: any;
}

function Widget<D = any>({ children, ...props }: WidgetProps) {
  const { widget, datasource, onResolve } = useWidget<D>(props);

  return React.cloneElement<WidgetChildrenProps<D>>(
    children,
    assign({}, omit(children.props, 'children'), {
      widget,
      datasource,
      onResolve,
    }),
  );
}

export default Widget;
