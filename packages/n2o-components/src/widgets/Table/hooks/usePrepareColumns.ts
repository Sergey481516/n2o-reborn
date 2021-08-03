import React, { useCallback, useMemo } from 'react';
import { Column as ReactTableColumnProps } from 'react-table';

const usePrepareColumns = (children: any) => {
  const prepareColumns = useCallback(() => {
    let columns: Array<ReactTableColumnProps<any>> = [];

    React.Children.map(children, (child) => {
      if (child.type.displayName !== 'Column') {
        throw new Error('There can only be a <Column /> inside the <Table />');
      }

      columns.push({
        Header: child.props.label,
        accessor: child.props.accessor,
        Cell: ({ children, ...props }) =>
          React.cloneElement(child.props.children, props),
      });
    });

    return columns;
  }, [children]);

  const columns = useMemo(() => prepareColumns(), [children]);

  return columns;
};

export default usePrepareColumns;
