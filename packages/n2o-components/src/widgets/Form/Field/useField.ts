import React, { useCallback } from 'react';
// import { useTranslation } from 'react-i18next';
import isFunction from 'lodash/isFunction';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import cn from 'classnames';

import { FieldRendererType } from './Field';

export function getValue(eventOrValue: any) {
  return eventOrValue?.hasOwnProperty('target')
    ? eventOrValue.target.value
    : eventOrValue;
}

const useField = <T>({
  id,
  src,
  field,
  name,
  disabled,
  form: { setFieldValue, setFieldError },
  control,
  meta,
  onChange,
}: FieldRendererType<T>) => {
  // const { t } = useTranslation(['validations']);

  const handleChange = useCallback<
    (eventOrValue: React.MouseEvent<MouseEvent>) => void
  >(
    (eventOrValue) => {
      const value = getValue(eventOrValue);

      setFieldValue(name, value);

      if (isFunction(onChange)) {
        onChange(value, name);
      }
    },
    [name, setFieldValue, onChange],
  );

  const handleBlur = useCallback<
    (eventOrValue: React.MouseEvent<MouseEvent>) => void
  >(
    (eventOrValue) => {
      const value = getValue(eventOrValue);

      if (isEmpty(value)) {
        setFieldError(name, '');
      }
    },
    [name],
  );

  const error = (meta.touched || meta.initialTouched) && meta.error;

  return {
    control: {
      ...control,
      ...omit(field, ['onChange']),
      src,
      disabled: disabled || control?.disabled,
      id: `field-${id || name}`,
      className: cn('control', control?.className, {
        'is-invalid': !!error,
      }),
      onChange: handleChange,
      onBlur: handleBlur,
    },
    error,
  };
};

export default useField;
