import React from 'react';
import {
  Row as RowProps,
  TableBodyPropGetter,
  TableBodyProps,
} from 'react-table';

import Row from './Row';

interface TbodyProps {
  selectionType?: 'row' | 'checkbox' | 'radio';
  onResolve: (model: any) => void;
  rows: Array<RowProps<any>>;
  prepareRow: (row: RowProps<any>) => void;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<any>) => TableBodyProps;
}

function Tbody({
  selectionType,
  onResolve,
  rows,
  prepareRow,
  getTableBodyProps,
}: TbodyProps) {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, index) => {
        prepareRow(row);

        return (
          <Row
            key={`row-${index}`}
            row={row as any}
            onResolve={onResolve}
            selectionType={selectionType}
          />
        );
      })}
    </tbody>
  );
}

export default Tbody;
