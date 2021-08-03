import React from 'react';
import { Field as FormikField, FieldProps, FieldValidator } from 'formik';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import cn from 'classnames';

import useField from './useField';
import Label from './Label';
import Control, { ControlType, Src } from '../Control';
import { IInputTextProps } from 'components/controls/InputText';

type FieldType<C = any, V = any> = {
  id?: string;
  src: Src;
  control?: Omit<ControlType<C>, 'src' | 'value' | 'name' | 'onChange'>;
  name: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
  hint?: React.ReactNode;
  help?: React.ReactNode;
  labelExtra?: React.ReactNode;
  validate?: FieldValidator;
  required?: boolean;
  onChange?: (value: V, name: string) => void;
};

export type FieldRendererType<C> = FieldProps & FieldType<C>;

function FieldRenderer<C>(props: FieldRendererType<C>) {
  const {
    id,
    name,
    className,
    label,
    labelClassName,
    labelPosition = 'top',
    labelExtra,
    help,
    disabled,
    hint,
    required,
  } = props;
  const { control, error } = useField<C>(props);

  return (
    <FormGroup
      controlId={id}
      className={cn('field', className, `field--label-${labelPosition}`, {
        'field--disabled': disabled,
        'field--has-error': !!error,
        'field--has-group-append': !!(control as any)?.groupAppend,
      })}
    >
      <Label
        className={labelClassName}
        id={id}
        name={name}
        label={label}
        help={help}
        extra={labelExtra}
        required={required}
      />

      <div className="field__control">
        <Control<C> {...(control as any)} />
      </div>

      {hint && <FormText className="field__hint">{hint}</FormText>}
      {error && <div className="field__error">{error}</div>}
    </FormGroup>
  );
}

function Field<T = IInputTextProps>(props: FieldType<T>): JSX.Element {
  return (
    <FormikField name={props.name} validate={props.validate}>
      {(fieldProps: FieldProps) => (
        <FieldRenderer<T> {...fieldProps} {...props} />
      )}
    </FormikField>
  );
}

export default Field;
