import { CSS } from '@lib/Theme/stitches.config';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  __DEV__,
} from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledContainer } from './Container.styles';

/**
 * The Container component fixes an element's width to the current breakpoint
 */
interface Props {
  /**
   * Override default CSS style.
   */
  css?: CSS;
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
   * padding applied on each side
   * @default sm
   */
  px?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * container max-width changes with breakpoint
   * @default true
   */
  responsive?: boolean;
  /**
   * max-width is set to 100%
   */
  fluid?: boolean;
}

export type ContainerProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type ContainerComponent = (<C extends React.ElementType = 'div'>(
  props: ContainerProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Container: ContainerComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      as,
      css,
      className = '',
      children,
      px = 'sm',
      responsive = true,
      fluid = false,
      ...containerProps
    }: ContainerProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const preClass = 'decaContainer';

    return (
      <StyledContainer
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        px={px}
        responsive={responsive}
        fluid={fluid}
        ref={ref}
        {...containerProps}
      >
        {children}
      </StyledContainer>
    );
  }
);

if (__DEV__) {
  Container.displayName = 'DecaUI.Container';
}

export default Container;
