import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import {
  __DEV__,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledBadge } from './Badge.styles';

/**
 * Badges are used to highlight an item's status for quick recognition.
 */
interface Props {
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
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * Have component be pill shaped
   */
  pill?: boolean;
}

export type BadgeProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type BadgeComponent = (<C extends React.ElementType = 'div'>(
  props: BadgeProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Badge: BadgeComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className,
      color = 'primary',
      size = 'md',
      as,
      css,
      pill = false,
      ...props
    }: BadgeProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const preClass = 'decaBadge';

    return (
      <StyledBadge
        ref={ref}
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
