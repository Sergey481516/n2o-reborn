import React from 'react';

import useCell from './useCell';

export interface CellProps {
  id: string;
  children: React.ReactElement;
}

function Cell(props: CellProps) {
  const { id, children, ...rest } = props;
  const { action } = useCell(props);

  return React.cloneElement(children, { action, ...rest });
}

export default Cell;
