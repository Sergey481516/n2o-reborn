import React from 'react';

interface IApplication {
  children: React.ReactNode;
}

function Application({ children }: IApplication): JSX.Element {
  return <div className="n2o-app">{children}</div>;
}

export default Application;
