import React from 'react';
import cn from 'classnames';

interface ILabelProps {
  id?: string;
  name?: string;
  label?: string;
  help?: string | React.ReactNode;
  extra?: string | React.ReactNode;
  className?: string;
  required?: boolean;
}

function Label({
  id,
  name,
  label,
  // help,
  extra,
  className,
  required,
}: ILabelProps): JSX.Element {
  return (
    <div className="field__label-container">
      <label
        htmlFor={`field-${id || name}`}
        className={cn('field__label', className)}
      >
        {label}
        {required && label && <span className="field__required-mark">*</span>}
      </label>
      {/*{help && (*/}
      {/*  <Tooltip id={id} trigger={['hover', 'focus']} overlay={help}>*/}
      {/*    <div className="field__help">*/}
      {/*      <Icon src="infoRounded" height="initial" width="initial" />*/}
      {/*    </div>*/}
      {/*  </Tooltip>*/}
      {/*)}*/}
      {extra && <div className="field__extra">{extra}</div>}
    </div>
  );
}

export default Label;
