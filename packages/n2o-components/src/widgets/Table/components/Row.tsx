import React, { useCallback } from 'react';
import { Row, UseRowSelectRowProps } from 'react-table';
import cn from 'classnames';

export interface RowProps {
  onResolve: (model: any) => void;
  row: Row & UseRowSelectRowProps<any>;
  selectionType?: 'row' | 'checkbox' | 'radio';
}

function Row({ row, selectionType, onResolve }: RowProps) {
  const onRowClick = useCallback(() => {
    if (selectionType === 'row') {
      row?.toggleRowSelected();
      onResolve(row.original);
    }
  }, [selectionType]);

  return (
    <tr
      {...row.getRowProps()}
      className={cn('table__row', {
        'table__row--selected': row?.isSelected,
      })}
      onClick={onRowClick}
    >
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
      })}
    </tr>
  );
}

export default Row;
