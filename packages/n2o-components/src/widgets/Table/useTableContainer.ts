import { useMemo } from 'react';
import defaultTo from 'lodash/defaultTo';

import usePrepareColumns from './hooks/usePrepareColumns';
import useSelection from './hooks/useSelection';
import usePaging from './hooks/usePaging';

import { ITableProps } from './Table';

const useTableContainer = <D>({
  widget,
  selectionType,
  datasource,
  children,
}: ITableProps) => {
  const columns = usePrepareColumns(children);
  const selectionPlugins = useSelection(selectionType);
  const [paging, paginationPlugins] = usePaging(widget);

  const data = useMemo<Array<D> | undefined>(() => defaultTo(datasource, []), [
    datasource,
  ]);
  const plugins = useMemo(() => [...paginationPlugins, ...selectionPlugins], [
    selectionPlugins,
    paginationPlugins,
  ]);

  return {
    columns,
    data,
    paging,
    plugins,
  };
};

export default useTableContainer;
