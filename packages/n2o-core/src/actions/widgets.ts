import { WidgetActionType } from 'constants/widgets';
import { RegisterWidgetAction, RegisterWidgetActionPayload } from './types';

export function registerWidget(
  widgetState: RegisterWidgetActionPayload,
): RegisterWidgetAction {
  return {
    type: WidgetActionType.Register,
    payload: widgetState,
  };
}
