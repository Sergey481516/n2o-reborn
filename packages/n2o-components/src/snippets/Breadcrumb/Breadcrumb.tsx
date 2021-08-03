import React from 'react';
import ReactBreadcrumb, {
  BreadcrumbProps as Props,
} from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem, {
  BreadcrumbItemProps as ItemProps,
} from 'react-bootstrap/BreadcrumbItem';
import map from 'lodash/map';

export interface BreadcrumbItemProps extends Omit<ItemProps, 'children'> {
  label: string;
  // Интерполяция с помощью modelLink, указывает путь до значения из models
  // (например: для страницы пользователя, чтобы вставить в label id, name и тд)
  modelLink?: string;
}

export interface BreadcrumbProps extends Props {
  items: Array<BreadcrumbItemProps>;
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <ReactBreadcrumb>
      {map(items, ({ label, ...item }, index) => (
        // TODO Написать компонент Link и использовать его тут
        <BreadcrumbItem {...item} key={`breadcrumb-item-${index}`}>
          {label}
        </BreadcrumbItem>
      ))}
    </ReactBreadcrumb>
  );
}

export default Breadcrumb;
