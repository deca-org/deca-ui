import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledGridItem } from './Grid.styles';
import GridContainer from './GridContainer';

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * The Grid component acts as a child to the GridContainer component
 */
export interface GridProps extends React.ComponentPropsWithRef<'div'> {
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
   * How many columns should be taken up by item from breakpoints n-xs
   */
  xs?: Cols;
  /**
   * How many columns should be taken up by item from breakpoints xs-sm
   */
  sm?: Cols;
  /**
   * How many columns should be taken up by item from breakpoints sm-md
   */
  md?: Cols;
  /**
   * How many columns should be taken up by item from breakpoints md-lg
   */
  lg?: Cols;
  /**
   * How many columns should be taken up by item after max lg breakpoint
   */
  xl?: Cols;
}

const Grid = React.forwardRef(
  (
    {
      as = 'div',
      css,
      className = '',
      children,
      xs,
      sm,
      md,
      lg,
      xl,
      ...gridProps
    }: GridProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const gridRef = useDOMRef(ref);
    const preClass = 'decaGrid';

    return (
      <StyledGridItem
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        ref={gridRef}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        {...gridProps}
      >
        {children}
      </StyledGridItem>
    );
  }
);

type GridComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Container: typeof GridContainer;
};

export default Grid as GridComponent<HTMLDivElement, GridProps>;
