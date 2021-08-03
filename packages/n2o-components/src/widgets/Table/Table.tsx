import React from 'react';
import { useTable, UseTableOptions } from 'react-table';

import useTableContainer from './useTableContainer';
import Thead from './components/Thead';
import Tbody from './components/Tbody';
import { WidgetChildrenProps } from '../../../../n2o-core/src/components/Widget/Widget';

export interface ITableProps
  extends Partial<UseTableOptions<any>>,
    WidgetChildrenProps<any> {
  selectionType?: 'row' | 'checkbox' | 'radio';
  pagination: boolean | React.ReactNode;
  children?: any;
}

function Table<D extends object = any>(props: ITableProps) {
  const { pagination, onResolve } = props;
  const { columns, data, paging, plugins } = useTableContainer(props);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: any = useTable<D>(
    {
      ...props,
      data,
      columns,
      manualPagination: true,
      pageCount: paging.count,
    } as UseTableOptions<D>,
    ...plugins,
  );

  return (
    <table {...getTableProps()} className="table">
      <Thead headerGroups={headerGroups} />
      <Tbody
        selectionType={props.selectionType}
        onResolve={onResolve}
        rows={rows}
        prepareRow={prepareRow}
        getTableBodyProps={getTableBodyProps}
      />

      {pagination && <div>pagination</div>}
    </table>
  );
}

export default Table;
