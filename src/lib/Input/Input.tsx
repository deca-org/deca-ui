import { CSS, StandardColors } from '@lib/Theme';
import { Modify, UnionToIntersection } from '@lib/Utils';
import clsx from 'clsx';
import React, {
  useId,
  useRef,
  useMemo,
  useState,
  useImperativeHandle,
} from 'react';

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
export interface InputProps
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
  as?: keyof JSX.IntrinsicElements;
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
      placeholder,
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

    const inputId = useId();

    const preClass = 'decaInput';

    return (
      <StyledInputMainContainer
        className={clsx(className, `${preClass}-root`)}
        css={css}
      >
        {label && (
          <StyledInputLabel
            size={size}
            state={getState}
            className={`${preClass}-label`}
            variant={variant}
            focusColor={focusColor}
            htmlFor={inputId}
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
            {...props}
          ></StyledInput>
        </StyledInputContainer>
        {helperText && (
          <StyledInputHelperText
            size={size}
            state={getState}
            className={`${preClass}-helperText`}
          >
            {helperText}
          </StyledInputHelperText>
        )}
      </StyledInputMainContainer>
    );
  }
);

export default Input;
