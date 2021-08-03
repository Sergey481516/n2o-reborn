import assign from 'lodash/assign';

import { WidgetActionType } from 'constants/widgets';
import { WidgetsActions } from 'actions/types';
import { Widget } from 'types/reduxState';

const widgetsState: Record<string, Widget> = {};
const widgetState: Partial<Widget> = {
  isInit: false,
  page: 1,
  size: 10,
};

function resolve(state: Widget, action: WidgetsActions): Widget {
  switch (action.type) {
    case WidgetActionType.ChangeSize:
      return assign({}, state, { size: action.payload.size });
    case WidgetActionType.ChangePage:
      return assign({}, state, { page: action.payload.page });
    default:
      return state;
  }
}

export default function widgetsReducer(
  state = widgetsState,
  action: WidgetsActions,
) {
  switch (action.type) {
    case WidgetActionType.Register:
      return assign({}, state, {
        [action.payload.id]: assign({}, widgetState, action.payload, {
          isInit: true,
        }),
      });
    case WidgetActionType.ChangeSize:
    case WidgetActionType.ChangePage:
      return assign({}, state, {
        [action.payload.id]: resolve(state[action.payload.id], action),
      });
    default:
      return state;
  }
}
