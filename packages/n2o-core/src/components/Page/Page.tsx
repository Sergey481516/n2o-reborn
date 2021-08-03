import React from 'react';
import { Route, RouteProps } from 'react-router';
import cn from 'classnames';

export interface IPage extends RouteProps {
  className?: string;
  children: React.ReactNode;
}

function Page({ className, path, children }: IPage): JSX.Element {
  return (
    <Route path={path}>
      <div className={cn('page', className)}>{children}</div>
    </Route>
  );
}

export default Page;
