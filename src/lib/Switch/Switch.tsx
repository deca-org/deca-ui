import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { useDOMRef, uuid, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useState, useMemo } from 'react';

import {
  StyledSwitchWrapper,
  StyledSwitchInput,
  StyledSwitchLabel,
} from './Switch.styles';
/**
 * Switches are an alternative to the checkbox component. You can switch between enabled or disabled states.
 */
export interface SwitchProps {
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
   * Color of radio button when active.
   * @default primary
   */
  color?: StandardColors;
  /**
   * The value assigned to the switch component.
   */
  value?: string;
  /**
   * Callback fired when a switch is enabled or disabled
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Callback fired when a switch is focused
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Name is used as an identifier in a form.
   */
  name?: string;
  /**
   *  Whether or not the switch is initially toggled.
   */
  initialToggle?: boolean;
  /**
   * Whether or not the switch is toggled.
   */
  toggled?: boolean;
  /**
   * Required checkbox prop.
   * @default false
   */
  required?: boolean;
}

const Switch = React.forwardRef(
  (
    {
      size = 'md',
      label,
      className,
      disabled = false,
      as = 'label',
      css,
      color = 'primary',
      required = false,
      toggled,
      initialToggle = false,
      onChange,
      name,
      value,
    }: SwitchProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const switchRef = useDOMRef(ref);

    const [selfToggled, setSelfToggled] = useState<boolean>(initialToggle);

    const switchId = uuid('switch');

    const isControlledComponent = useMemo(
      () => toggled !== undefined,
      [toggled]
    );

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (!isControlledComponent) {
        setSelfToggled(e.target.checked);
      }
      onChange && onChange(e);
    };

    const preClass = 'decaSwitch';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledSwitchWrapper className={clsx(className, `${preClass}-root`)}>
        <StyledSwitchInput
          id={switchId}
          type="checkbox"
          onChange={changeHandler}
          checked={isControlledComponent ? toggled : selfToggled}
          ref={switchRef}
          isDisabled={disabled}
          name={name}
          size={size}
          className={`${preClass}-input`}
          disabled={disabled}
          color={color}
          required={required}
          value={value}
          isDark={dark}
        />
        <StyledSwitchLabel
          htmlFor={switchId}
          css={css}
          size={size}
          as={as}
          color={color}
          isDisabled={disabled}
          hasLabel={label ? true : false}
          isDark={dark}
        >
          {label && label}
        </StyledSwitchLabel>
      </StyledSwitchWrapper>
    );
  }
);

if (__DEV__) {
  Switch.displayName = 'DecaUI.Switch';
}

export default Switch;
