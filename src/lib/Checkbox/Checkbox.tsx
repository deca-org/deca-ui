import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { useDOMRef } from '@lib/Utils';
import { Check } from '@styled-icons/fa-solid/Check';
import clsx from 'clsx';
import React, { useId, useState, useMemo } from 'react';

import {
  StyledCheckboxWrapper,
  StyledCheckbox,
  StyledCheckboxLabel,
} from './Checkbox.styles';
import CheckboxGroup from './CheckboxGroup';

/**
 * Checkboxes can be used to turn an option on or off
 */
export interface CheckboxProps {
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
   * Changes which tag component outputs.
   */
  as?: keyof JSX.IntrinsicElements;
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

const Checkbox = React.forwardRef(
  (
    {
      size = 'md',
      label,
      className,
      name,
      disabled = false,
      as = 'label',
      css,
      color = 'primary',
      required = false,
      checked,
      initialCheck = false,
      onChange,
      value,
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const checkboxRef = useDOMRef(ref);

    const [selfChecked, setSelfChecked] = useState<boolean>(initialCheck);
    const checkboxId = useId();

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

    return (
      <StyledCheckboxWrapper className={clsx(className, `${preClass}-root`)}>
        <StyledCheckbox
          id={checkboxId}
          type="checkbox"
          onChange={changeHandler}
          checked={isControlledComponent ? checked : selfChecked}
          ref={checkboxRef}
          required={required}
          className={`${preClass}-input`}
          name={name}
          size={size}
          color={color}
          disabled={disabled}
          isDisabled={disabled}
          value={value}
        />
        <StyledCheckboxLabel
          htmlFor={checkboxId}
          css={css}
          size={size}
          as={as}
          color={color}
          isDisabled={disabled}
          hasLabel={label ? true : false}
        >
          <Check className={`${preClass}-icon`} />
          {label && label}
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    );
  }
);

type CheckboxComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Group: typeof CheckboxGroup;
};

export default Checkbox as CheckboxComponent<HTMLInputElement, CheckboxProps>;
