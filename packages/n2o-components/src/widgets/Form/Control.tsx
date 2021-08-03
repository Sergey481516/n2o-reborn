import React from 'react';

import controls from '../../controls';

export type Src = keyof typeof controls;

export type ControlType<T = any, V = any> = T & {
  id?: string;
  src: Src;
  className?: string;
  disabled?: boolean;
  label?: string;
  onChange: (value: V) => void;
};

function Control<T>({ src, ...props }: ControlType<T>): JSX.Element {
  if (!controls[src]) {
    throw new Error(`Can't find ${src} control!`);
  }

  return React.createElement(controls[src] as React.ElementType, props);
}

export default Control;
