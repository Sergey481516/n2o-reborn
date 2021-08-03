import React from 'react';
import cn from 'classnames';

interface ILeftRightLayout {
  className?: string;
  children: React.ReactNode;
}

function LeftRightLayout({ className, children }: ILeftRightLayout) {
  return <div className={cn('left-right-layout', className)}>{children}</div>;
}

export default LeftRightLayout;
