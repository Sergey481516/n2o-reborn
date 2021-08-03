import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout): JSX.Element {
  return (
    <div className="n2o-app__layout layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
