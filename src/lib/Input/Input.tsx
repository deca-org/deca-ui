import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { Modify, UnionToIntersection, uuid, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useRef, useMemo, useState, useImperativeHandle } from 'react';

import {
  StyledInputMainContainer,
  StyledInputLabel,
  StyledInputHelperText,
  StyledInputContainer,
  StyledInput,
} from './Input.styles';

/**
 * Type for Input and Text Area elements
 */
export type FormElement = HTMLInputElement | HTMLTextAreaElement;

/**
 * Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
export interface InputProps<T extends React.ElementType>
  extends Modify<
    React.ComponentPropsWithRef<'input'>,
    {
      /**
       * Size of the component.
       * @default md
       */
      size?: 'sm' | 'md' | 'lg';
    }
  > {
  /**
   * Size of the component.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Text label for the component.
   */
  label?: string;
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
  /**
   * Disabled state applied to the component.
   * @default false
   */
  disabled?: boolean;
  /**
   * The variant to use.
   * @default solid
   */
  variant?: 'solid' | 'outlined';
  /**
   * Changes which tag component outputs.
   */
  as?: T;
  /**
   * Placeholder text for component.
   */
  placeholder?: string;
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
   * Set input width to 100%.
   * @default false
   */
  maxWidth?: boolean;
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
  /**
   * Have input be pill shaped
   */
  pill?: boolean;
}

const Input = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {
      label,
      className = '',
      disabled = false,
      size = 'md',
      variant = 'solid',
      as,
      css,
      focusColor = 'primary',
      maxWidth = false,
      placeholder,
      required = false,
      helperText = '',
      value,
      initialValue = '',
      onChange,
      onFocus,
      onBlur,
      pill = false,
      ...props
    }: InputProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof InputProps<T>>,
    ref: React.Ref<FormElement | null>
  ) => {
    const inputRef = useRef<UnionToIntersection<FormElement>>(null);

    useImperativeHandle(ref, () => inputRef.current);

    const [selfValue, setSelfValue] = useState<string>(initialValue);
    const [focused, setFocused] = useState<boolean>(false);

    const isControlledComponent = useMemo(() => value !== undefined, [value]);

    const changeHandler = (e: React.ChangeEvent<FormElement>) => {
      if (disabled) return;
      if (!isControlledComponent) {
        setSelfValue(e.target.value);
      }
      onChange && onChange(e);
    };

    const focusHandler = (e: React.FocusEvent<FormElement>) => {
      if (disabled) return;
      setFocused(true);
      onFocus && onFocus(e);
    };

    const blurHandler = (e: React.FocusEvent<FormElement>) => {
      if (disabled) return;
      setFocused(false);
      onBlur && onBlur(e);
    };

    const getState = useMemo(() => {
      return focused
        ? 'focused'
        : disabled
        ? 'isDisabled'
        : selfValue || value
        ? 'value'
        : 'default';
    }, [focused, disabled, selfValue, value]);

    const inputId = uuid('input');

    const preClass = 'decaInput';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledInputMainContainer
        className={clsx(className, `${preClass}-root`)}
        css={css}
        size={size}
        maxWidth={maxWidth}
      >
        {label && (
          <StyledInputLabel
            size={size}
            state={getState}
            className={`${preClass}-label`}
            variant={variant}
            focusColor={focusColor}
            htmlFor={inputId}
            pill={pill}
            isDark={dark}
          >
            {label}
          </StyledInputLabel>
        )}
        <StyledInputContainer
          size={size}
          state={getState}
          className={`${preClass}-wrap`}
          variant={variant}
          focusColor={focusColor}
          maxWidth={maxWidth}
          pill={pill}
          isDark={dark}
        >
          <StyledInput
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChange={changeHandler}
            className={`${preClass}-input`}
            variant={variant}
            state={getState}
            as={as}
            size={size}
            value={isControlledComponent ? value : selfValue}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            id={inputId}
            pill={pill}
            isDark={dark}
            {...props}
          ></StyledInput>
        </StyledInputContainer>
        {helperText && (
          <StyledInputHelperText
            size={size}
            state={getState}
            className={`${preClass}-helperText`}
            pill={pill}
            isDark={dark}
          >
            {helperText}
          </StyledInputHelperText>
        )}
      </StyledInputMainContainer>
    );
  }
);

if (__DEV__) {
  Input.displayName = 'DecaUI.Input';
}

export default Input;
