import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import StyledButton from './Button.styles';
import ButtonIcon from './ButtonIcon';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export interface ButtonProps<T extends React.ElementType>
  extends React.ComponentPropsWithRef<'button'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /**
   * The role attribute of the component.
   */
  role?: string;
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
   * Function that executes when button is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Size of the component.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Changes which tag component outputs.
   */
  as?: T;
  /**
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * The variant to use.
   * @default solid
   */
  variant?: 'solid' | 'outlined' | 'ghost' | 'flat';
  /**
   * Color to use.
   * @default primary
   */
  color?: StandardColors;
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
   * Have button be pill shaped
   */
  pill?: boolean;
}

const Button = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      role = 'button',
      as,
      css,
      icon,
      iconRight,
      iconLeftCss,
      iconRightCss,
      onClick,
      color = 'primary',
      disabled = false,
      variant = 'solid',
      size = 'md',
      maxWidth = false,
      className = '',
      children,
      pill = false,
      ...btnProps
    }: ButtonProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const hasText = useMemo(
      () => React.Children.count(children) !== 0,
      [children]
    );

    const buttonRef = useDOMRef(ref);

    // ensures only icon or only iconRight is present
    const singleIcon = useMemo(
      () =>
        (!hasText && !iconRight && icon) || (!hasText && !icon && iconRight)
          ? true
          : false,
      [children, iconRight, icon]
    );

    if (disabled) {
      onClick = undefined;
    }

    const preClass = 'decaButton';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledButton
        role={role}
        as={as}
        css={css}
        onClick={onClick}
        color={color}
        disabled={disabled}
        isDisabled={disabled}
        variant={variant}
        size={size}
        maxWidth={maxWidth}
        className={clsx(className, `${preClass}-root`)}
        ref={buttonRef}
        singleIcon={singleIcon}
        pill={pill}
        isDark={dark}
        {...btnProps}
      >
        {(icon && hasText) || (icon && iconRight) ? (
          <ButtonIcon
            size={size}
            isSingle={false}
            side="left"
            css={iconLeftCss}
            className={`${preClass}-leftIcon`}
          >
            {icon}
          </ButtonIcon>
        ) : (
          icon && (
            <ButtonIcon
              size={size}
              isSingle={true}
              side="left"
              css={iconLeftCss}
              className={`${preClass}-leftIcon`}
            >
              {icon}
            </ButtonIcon>
          )
        )}
        {hasText && children}
        {(iconRight && hasText) || (icon && iconRight) ? (
          <ButtonIcon
            size={size}
            isSingle={false}
            side="right"
            css={iconRightCss}
            className={`${preClass}-rightIcon`}
          >
            {iconRight}
          </ButtonIcon>
        ) : (
          iconRight && (
            <ButtonIcon
              size={size}
              isSingle={true}
              side="right"
              css={iconRightCss}
              className={`${preClass}-rightIcon`}
            >
              {iconRight}
            </ButtonIcon>
          )
        )}
      </StyledButton>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'DecaUI.Button';
}

export default Button;
