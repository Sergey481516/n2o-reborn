import React from 'react';
import { HeaderGroup } from 'react-table';

interface TheadProps {
  headerGroups: Array<HeaderGroup<any>>;
}

function Thead({ headerGroups }: TheadProps) {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default Thead;
