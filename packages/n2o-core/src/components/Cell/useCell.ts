import { CellProps } from './Cell';

const useCell = (props: CellProps) => {
  const action = () => {
    console.log('point');
  };

  return {
    action,
  };
};

export default useCell;
