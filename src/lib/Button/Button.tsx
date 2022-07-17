import { CSS, StandardColors, theme } from '@lib/Theme';
import React from 'react';
import { Camera } from 'react-feather';

import StyledButton from './Button.styles';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * The content of the component.
   */
  children: React.ReactNode | undefined;
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
   * Function that executes when button is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Size of the component.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Changes which tag component outputs
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Override default CSS style
   */
  css?: CSS;
  /**
   * The variant to use.
   * @default solid
   */
  variant?: 'solid' | 'outlined' | 'ghost';
  /**
   * Color to use.
   * @default primary
   */
  color?: StandardColors;
  /**
   * Autoscale button width
   * @default false
   */
  auto?: boolean;
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
}

const defaultProps = {
  color: 'primary',
  disabled: false,
  variant: 'solid',
  size: 'md',
  auto: false,
  className: '',
};

const Button = React.forwardRef(
  (
    { as, css, iconLeftCss, iconRightCss, onClick, ...btnProps }: ButtonProps,
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    return (
      <>
        <StyledButton
          size="md"
          color="error"
          variant="outlined"
          disabled={false}
        >
          Button
        </StyledButton>
      </>
    );
  }
);

export { Button };
