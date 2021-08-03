import { usePagination } from 'react-table';
import { Widget } from '../../../../../n2o-core/src/types/reduxState';

const usePaging = (widget: Widget): [any, any] => {
  const paging = {
    count: widget.count,
  };

  return [paging, [usePagination]];
};

export default usePaging;
