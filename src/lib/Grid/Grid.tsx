import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
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
   * How many columns should be taken up by item initially
   */
  n?: Cols;
  /**
   * How many columns should be taken up by item on xs breakpoint
   */
  xs?: Cols;
  /**
   * How many columns should be taken up by item on sm breakpoint
   */
  sm?: Cols;
  /**
   * How many columns should be taken up by item on md breakpoint
   */
  md?: Cols;
  /**
   * How many columns should be taken up by item on lg breakpoint
   */
  lg?: Cols;
  /**
   * How many columns should be taken up by item on xl breakpoint
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
      n,
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

    const genGridItemCss = (breakpoint?: number, bp?: CSS) => {
      if (bp) {
        return {
          flexBasis: `calc((${breakpoint} / 12) * 100%)`,
          maxWidth: `calc((${breakpoint} / 12) * 100%)`,
          ...bp,
        };
      }
      return {
        flexBasis: `calc((${breakpoint} / 12) * 100%)`,
        maxWidth: `calc((${breakpoint} / 12) * 100%)`,
      };
    };

    const {
      '@n': cssN,
      '@xs': cssXs,
      '@sm': cssSm,
      '@md': cssMd,
      '@lg': cssLg,
      '@xl': cssXl,
      ...otherCss
    } = (css as CSS) || {};

    const getCss = {
      flexGrow: 0,
      '@n': genGridItemCss(n, cssN),
      '@xs': genGridItemCss(xs, cssXs),
      '@sm': genGridItemCss(sm, cssSm),
      '@md': genGridItemCss(md, cssMd),
      '@lg': genGridItemCss(lg, cssLg),
      '@xl': genGridItemCss(xl, cssXl),
      ...otherCss,
    };

    return (
      <StyledGridItem
        as={as}
        css={getCss}
        className={clsx(className, `${preClass}-root`)}
        ref={gridRef}
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

if (__DEV__) {
  Grid.displayName = 'DecaUI.Grid';
}

export default Grid as GridComponent<HTMLDivElement, GridProps>;
