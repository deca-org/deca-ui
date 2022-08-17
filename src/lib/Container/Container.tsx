import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledContainer } from './Container.styles';

/**
 * The Container component fixes an element's width to the current breakpoint
 */
export interface ContainerProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Changes which tag component outputs.
   */
  as?: keyof JSX.IntrinsicElements;
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

const Container = React.forwardRef(
  (
    {
      as = 'div',
      css,
      className = '',
      children,
      px = 'sm',
      responsive = true,
      fluid = false,
      ...containerProps
    }: ContainerProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const containerRef = useDOMRef(ref);
    const preClass = 'decaContainer';

    return (
      <StyledContainer
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        px={px}
        responsive={responsive}
        fluid={fluid}
        ref={containerRef}
        {...containerProps}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;
