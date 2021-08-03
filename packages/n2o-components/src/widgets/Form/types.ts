import React, { RefObject } from 'react';
import { FormikHelpers, FormikProps } from 'formik';
// @ts-ignore
import { WidgetChildrenProps } from '@n2o/core/components/Widget/Widget';

export interface FormProps<Values>
  extends Omit<FormikProps<Values>, 'handleSubmit'>,
    WidgetChildrenProps<any> {
  className?: string;
  innerRef?: RefObject<FormikProps<Values>>;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => void;
  handleSubmit?: (
    e: React.FormEvent<HTMLFormElement>,
    props: FormikProps<Values>,
  ) => void;
  children?: React.ReactNode;
}

export type OnSubmit<Values> = (
  props: FormikProps<Values>,
) => (e: React.FormEvent<HTMLFormElement>) => void;
