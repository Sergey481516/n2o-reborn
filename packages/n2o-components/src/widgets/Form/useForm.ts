import { useCallback } from 'react';
import defaultTo from 'lodash/defaultTo';

import { FormProps, OnSubmit } from './types';

const useForm = <Values>({
  handleSubmit: customHandleSubmit,
}: FormProps<Values>) => {
  const handleSubmit = useCallback<OnSubmit<Values>>(
    (props) => (e) => {
      e.preventDefault();

      if (
        !customHandleSubmit ||
        defaultTo(customHandleSubmit?.(e, props), true)
      ) {
        props.handleSubmit(e);
      }
    },
    [customHandleSubmit],
  );

  return {
    handleSubmit,
  };
};

export default useForm;
