import React from 'react';
import cn from 'classnames';

interface IRightPlace {
  className?: string;
  children: React.ReactChild;
}

function RightPlace({ className, children }: IRightPlace) {
  return (
    <div className={cn('left-right-layout__right', className)}>{children}</div>
  );
}

export default RightPlace;
