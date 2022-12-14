import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledBadge } from './Badge.styles';

export interface BadgeProps<T extends React.ElementType> extends React.ComponentPropsWithRef<'div'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
  /**
   * Color to use.
   * @default primary
   */
  color?: StandardColors;
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
   * Have component be pill shaped
   */
  pill?: boolean;
}

const Badge = React.forwardRef(<T extends React.ElementType = "div">
  (
    {
      children,
      className,
      color = 'primary',
      size = 'md',
      as,
      css,
      pill = false,
      ...props
    }: BadgeProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BadgeProps<T>>,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
  const badgeRef = useDOMRef(ref);

  const preClass = 'decaBadge';

  return (
    <StyledBadge
      ref={badgeRef}
      size={size}
      as={as}
      css={css}
      color={color}
      className={clsx(className, `${preClass}-root`)}
      pill={pill}
      {...props}
    >
      {children}
    </StyledBadge>
  );
}
);

if (__DEV__) {
  Badge.displayName = 'DecaUI.Badge';
}

export default Badge;
