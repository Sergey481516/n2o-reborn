import React from 'react';
import cn from 'classnames';

export interface TextCellProps {
  className?: string;
  value?: string | number | null;
}

function TextCell({ className, value }: TextCellProps) {
  return <span className={cn('text-cell', className)}>{value}</span>;
}

export default TextCell;
