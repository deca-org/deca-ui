import { CSS, StandardColors } from '@lib/Theme';
import { Modify, useDOMRef } from '@lib/Utils';
import React, { useState, useMemo, useRef, useImperativeHandle } from 'react';

import {
  StyledInputMainContainer,
  StyledInputLabel,
  StyledInputContainer,
  StyledInputIcon,
  StyledInput,
} from './Input.styles';

/**
 * Type for Input and Text Area elements
 */
export type FormElement = HTMLInputElement | HTMLTextAreaElement;

/**
 * Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
export interface InputProps
  extends Modify<
    React.ComponentPropsWithRef<'input'>,
    {
      /**
       * Size of the component.
       * @default md
       */
      size?: 'sm' | 'md';
    }
  > {
  /**
   * Text label for the component
   */
  label?: string;
  /**
   * ClassName applied to the component
   * @default ''
   */
  className?: string;
  /**
   * Disabled state applied to the component
   * @default false
   */
  disabled?: boolean;
  /**
   * The variant to use.
   * @default solid
   */
  variant?: 'solid' | 'outlined';
  /**
   * Changes which tag component outputs
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Override default CSS style
   */
  css?: CSS;
  /**
   * Color of text and border when input is focused.
   * @default primary
   */
  focusColor?: StandardColors;
  /**
   * Set button width to 100%.
   * @default false
   */
  maxWidth?: boolean;
  /**
   * Icon on the left side of the component.
   */
  icon?: React.ReactNode;
  /**
   * Icon on the right side of the component.
   */
  iconRight?: React.ReactNode;
  /**
   * CSS applied to icon on the left side of the component.
   */
  iconLeftCss?: CSS;
  /**
   * CSS applied to icon on the right side of the component.
   */
  iconRightCss?: CSS;
  /**
   * Required input prop.
   * @default false
   */
  required?: boolean;
  /**
   * Add helper text to input.
   * @default ''
   */
  helperText?: string;
  /**
   * The current value of the input.
   */
  value?: string;
  /**
   * The initial value of the input.
   */
  initialValue?: string;
  /**
   * Function that executes when input is changed.
   */
  onChange?(e: React.ChangeEvent<FormElement>): void;
  /**
   * Function that executes when input is focused.
   */
  onFocus?(e: React.FocusEvent<FormElement>): void;
  /**
   * Function that executes when input is just out of focus.
   */
  onBlur?(e: React.FocusEvent<FormElement>): void;
}

const Input = React.forwardRef(
  (
    {
      label,
      className = '',
      disabled = false,
      size = 'md',
      variant = 'solid',
      as = 'input',
      css,
      focusColor = 'primary',
      maxWidth = false,
      icon,
      iconRight,
      iconLeftCss,
      iconRightCss,
      required = false,
      helperText = '',
      value,
      initialValue = '',
      onChange,
      onFocus,
      onBlur,
      ...props
    }: InputProps,
    ref: React.Ref<FormElement | null>
  ) => {
    const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => inputRef.current);

    const [selfValue, setSelfValue] = useState<string>(initialValue);
    const [focused, setFocused] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<FormElement>) => {
      if (disabled) return;
      setSelfValue(e.target.value);
      onChange && onChange(e);
    };

    const focusHandler = (e: React.FocusEvent<FormElement>) => {
      setFocused(true);
      onFocus && onFocus(e);
    };

    const blurHandler = (e: React.FocusEvent<FormElement>) => {
      setFocused(false);
      onBlur && onBlur(e);
    };

    const getState = useMemo(() => {
      return focused
        ? 'focused'
        : disabled
        ? 'disabled'
        : selfValue
        ? 'value'
        : 'default';
    }, [focused, disabled, selfValue]);

    return (
      <StyledInputMainContainer>
        {label && (
          <StyledInputLabel size={size} state={getState}>
            {label}
          </StyledInputLabel>
        )}
        <StyledInputContainer size={size} state={getState}>
          <StyledInput
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChange={changeHandler}
          ></StyledInput>
        </StyledInputContainer>
      </StyledInputMainContainer>
    );
  }
);

export default Input;
