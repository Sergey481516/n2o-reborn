import React from 'react';
import cn from 'classnames';

interface ILeftPlace {
  className?: string;
  children: React.ReactChild;
}

function LeftPlace({ className, children }: ILeftPlace) {
  return (
    <div className={cn('left-right-layout__left', className)}>{children}</div>
  );
}

export default LeftPlace;
