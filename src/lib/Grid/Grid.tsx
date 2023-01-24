import { CSS } from '@lib/Theme/stitches.config';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  __DEV__,
  MasterComponent,
} from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledGridItem } from './Grid.styles';
import GridContainer from './GridContainer';

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * The Grid component acts as a child to the GridContainer component
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

export type GridProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type GridComponent = (<C extends React.ElementType = 'div'>(
  props: GridProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Grid: GridComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      as,
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
    }: GridProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const preClass = 'decaGrid';

    const genGridItemCss = (breakpoint?: Cols, bp?: CSS) => {
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
        ref={ref}
        {...gridProps}
      >
        {children}
      </StyledGridItem>
    );
  }
);

if (__DEV__) {
  Grid.displayName = 'DecaUI.Grid';
}

export default Grid as MasterComponent<
  HTMLDivElement,
  GridProps<React.ElementType>,
  { Container: typeof GridContainer }
>;
