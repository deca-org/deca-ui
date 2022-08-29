import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

import { Cols, GridProps } from './Grid';
import { StyledGridContainer } from './Grid.styles';

/**
 * The GridContainer component serves as a wrapper component to the Grid component
 */
export interface GridContainerProps extends React.ComponentPropsWithRef<'div'> {
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
   * How much spacing there should be between columns.
   */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * JustifyContent css prop.
   */
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * AlignItems css prop.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end';
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

const GridContainer = React.forwardRef(
  (
    {
      as = 'div',
      css,
      className = '',
      children,
      spacing = 'sm',
      justifyContent,
      alignItems,
      n,
      xs,
      sm,
      md,
      lg,
      xl,
      ...gridContainerProps
    }: GridContainerProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const gridContainerRef = useDOMRef(ref);
    const preClass = 'decaGridContainer';

    return (
      <StyledGridContainer
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        ref={gridContainerRef}
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems={alignItems}
        {...gridContainerProps}
      >
        {React.Children.map(
          children as React.ReactElement<GridProps>,
          (child: React.ReactElement<GridProps>) => {
            return React.cloneElement(child, {
              n: child.props.n ? child.props.n : n,
              xs: child.props.xs ? child.props.xs : xs,
              sm: child.props.sm ? child.props.sm : sm,
              md: child.props.md ? child.props.md : md,
              lg: child.props.lg ? child.props.lg : lg,
              xl: child.props.xl ? child.props.xl : xl,
            });
          }
        )}
      </StyledGridContainer>
    );
  }
);

export default GridContainer;
