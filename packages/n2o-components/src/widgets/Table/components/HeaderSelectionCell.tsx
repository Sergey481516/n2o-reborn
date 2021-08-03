import React from 'react';
import { HeaderProps, UseRowSelectInstanceProps } from 'react-table';

import IndeterminateCheckbox from './IndeterminateCheckbox';

interface HeaderSelectionCellProps
  extends HeaderProps<any>,
    UseRowSelectInstanceProps<any> {}

function HeaderSelectionCell({
  getToggleAllRowsSelectedProps,
}: HeaderSelectionCellProps) {
  return (
    <div>
      <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    </div>
  );
}

export default HeaderSelectionCell;
