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
  StyledSwitchWrapper,
  StyledSwitchInput,
  StyledSwitchLabel,
} from './Switch.styles';
/**
 * Switches are an alternative to the checkbox component. You can switch between enabled or disabled states.
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

export type SwitchProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type SwitchComponent = (<C extends React.ElementType = 'input'>(
  props: SwitchProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Switch: SwitchComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
    {
      size = 'md',
      label,
      className,
      disabled = false,
      as,
      css,
      color = 'primary',
      required = false,
      toggled,
      initialToggle = false,
      onChange,
      name,
      value,
    }: SwitchProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
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
          ref={ref}
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
          as={as as any} // as prop will not accept T in this case
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
