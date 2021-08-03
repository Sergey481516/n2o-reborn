import { Reducer } from 'redux';
import { RouterState } from 'connected-react-router';

import CrudApiProvider from 'dataProvider/CrudApiProvider';
import { ModelType } from 'constants/ModelType';

export interface ReduxState {
  router: Reducer<RouterState<any>>;
  widgets: Widgets;
  models: Models;
}

export interface Widget {
  id: string;
  pageId: string;
  isInit: boolean;
  fetchOnInit: boolean;
  visible: boolean;
  sorting: Record<string, any>;
  dataProvider: CrudApiProvider;
  size: number;
  count: number;
  page: number;
}
export type Widgets = Record<string, Widget>;

export type Models = Record<ModelType, Model>;
export type Model =
  | Record<string, Record<string, any>>
  | Array<Record<string, any>>;
