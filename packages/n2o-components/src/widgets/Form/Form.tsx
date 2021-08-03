import React from 'react';
import { Formik } from 'formik';
import cn from 'classnames';

import useForm from './useForm';

import { FormProps } from './types';

function Form<Values = any>(props: FormProps<Values>) {
  const {
    className,
    initialValues,
    onSubmit,
    children,
    innerRef,
    ...rest
  } = props;
  const { handleSubmit } = useForm<Values>(props);

  return (
    <Formik<Values>
      initialValues={initialValues}
      onSubmit={onSubmit}
      innerRef={innerRef}
      {...rest}
    >
      {(props) => (
        <form className={cn('form', className)} onSubmit={handleSubmit(props)}>
          {children}
        </form>
      )}
    </Formik>
  );
}

export default Form;
