import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

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
   * How many columns should be taken up by each item on xs breakpoint
   */
  xs?: Cols;
  /**
   * How many columns should be taken up by each item on sm breakpoint
   */
  sm?: Cols;
  /**
   * How many columns should be taken up by each item on md breakpoint
   */
  md?: Cols;
  /**
   * How many columns should be taken up by each item on lg breakpoint
   */
  lg?: Cols;
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
      xs,
      sm,
      md,
      lg,
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
              xs,
              sm,
              md,
              lg,
            });
          }
        )}
      </StyledGridContainer>
    );
  }
);

export default GridContainer;
