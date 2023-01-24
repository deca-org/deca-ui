import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import {
  Modify,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  uuid,
  __DEV__,
} from '@lib/Utils';
import clsx from 'clsx';
import React, { useState, useMemo } from 'react';

import {
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledCheckboxLabel,
} from './Checkbox.styles';

/**
 * Checkboxes can be used to turn an option on or off
 */
interface Props
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
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * Color of checkbox when active.
   * @default primary
   */
  color?: StandardColors;
  /**
   * The value assigned to the checkbox
   */
  value?: string;
  /**
   * Whether or not the checkbox is checked.
   */
  checked?: boolean;
  /**
   * Function that executes when checkbox is checked or unchecked.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Callback fired when a checkbox is focused
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Name is used as an identifier in a form.
   */
  name?: string;
  /**
   *  Whether or not the checkbox is initially checked.
   */
  initialCheck?: boolean;
  /**
   * Required checkbox prop.
   * @default false
   */
  required?: boolean;
}

const Check = () => (
  <svg
    viewBox="0 0 512 512"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
    ></path>
  </svg>
);

export type CheckboxProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type CheckboxComponent = (<C extends React.ElementType = 'input'>(
  props: CheckboxProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Checkbox: CheckboxComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {
      size = 'md',
      label,
      className,
      name,
      disabled = false,
      as,
      css,
      color = 'primary',
      required = false,
      checked,
      initialCheck = false,
      onChange,
      value,
      ...props
    }: CheckboxProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const [selfChecked, setSelfChecked] = useState<boolean>(initialCheck);

    const checkboxId = useMemo(() => {
      if (props.id) {
        return props.id;
      } else {
        return uuid();
      }
    }, [props.id]);

    const isControlledComponent = useMemo(
      () => checked !== undefined,
      [checked]
    );

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (!isControlledComponent) {
        setSelfChecked(e.target.checked);
      }
      onChange && onChange(e);
    };

    const preClass = 'decaCheckbox';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledCheckboxWrapper className={clsx(className, `${preClass}-root`)}>
        <StyledCheckbox
          id={checkboxId}
          type="checkbox"
          onChange={changeHandler}
          checked={isControlledComponent ? checked : selfChecked}
          ref={ref}
          required={required}
          className={`${preClass}-input`}
          name={name}
          size={size}
          color={color}
          disabled={disabled}
          isDisabled={disabled}
          value={value}
          isDark={dark}
          {...props}
        />
        <StyledCheckboxLabel
          htmlFor={checkboxId}
          css={css}
          size={size}
          as={as as any} // as prop will not accept T in this case
          color={color}
          isDisabled={disabled}
          hasLabel={label ? true : false}
          isDark={dark}
        >
          <Check />
          {label && label}
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    );
  }
);

if (__DEV__) {
  Checkbox.displayName = 'DecaUI.Checkbox';
}

export default Checkbox;
