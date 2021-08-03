import { Column as ReactTableColumnProps } from 'react-table';

export type ColumnProps = {
  label: string;
  children: any;
} & Partial<ReactTableColumnProps<any>>;

function Column({ children }: ColumnProps) {
  return children;
}

Column.displayName = 'Column';

export default Column;
