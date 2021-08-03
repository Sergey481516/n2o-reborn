import React from 'react';
import FormCheck, { FormCheckProps } from 'react-bootstrap/FormCheck';

export interface CheckboxProps extends FormCheckProps {}

const Checkbox = React.forwardRef((props, ref) => {
  // @ts-ignore
  return <FormCheck {...props} ref={ref} />;
});

export default Checkbox;
