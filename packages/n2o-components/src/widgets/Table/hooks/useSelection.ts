import { useCallback, useMemo } from 'react';
import { PluginHook, useRowSelect } from 'react-table';

import HeaderSelectionCell from '../components/HeaderSelectionCell';
import SelectionCell from '../components/SelectionCell';
import { SelectionType } from '../types';

const useSelection = (selectionType: SelectionType) => {
  const getPlugins = useCallback(() => {
    const plugins: Array<PluginHook<any>> = [];

    if (selectionType === 'checkbox') {
      plugins.push(useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: HeaderSelectionCell,
            Cell: SelectionCell,
          },
          ...columns,
        ]);
      });
    }

    return plugins;
  }, [selectionType]);

  const selectionPlugins = useMemo(() => getPlugins(), [getPlugins]);

  return selectionPlugins;
};

export default useSelection;
