import React from 'react';
import { Row, UseRowSelectRowProps } from 'react-table';

import InderetminateCheckbox from './IndeterminateCheckbox';

interface SelectionCellProps {
  row: Row & UseRowSelectRowProps<any>;
}

function SelectionCell({ row }: SelectionCellProps) {
  return (
    <div>
      <InderetminateCheckbox {...row.getToggleRowSelectedProps()} />
    </div>
  );
}

export default SelectionCell;
