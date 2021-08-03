import React from 'react';

import Brand from './Brand';

export interface HeaderProps {
  menu?: {
    brand?: string;
    fixed?: boolean;
    links: [
      {
        id: string;
        label: string;
        target: string;
        type: 'link' | 'dropdown';
        href: string;
      },
    ];
  };
}

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <Brand />
    </header>
  );
}

export default Header;
