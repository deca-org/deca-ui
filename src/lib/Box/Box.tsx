import { CSS } from '@lib/Theme/stitches.config';
import {
  __DEV__,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledBox } from './Box.styles';

/**
 * The Box component serves as a wrapper component
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
}

export type BoxProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type BoxComponent = (<C extends React.ElementType = 'div'>(
  props: BoxProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Box: BoxComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    { as, css, children, className = '', ...boxProps }: BoxProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const preClass = 'decaBox';

    return (
      <StyledBox
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        ref={ref}
        {...boxProps}
      >
        {children}
      </StyledBox>
    );
  }
);

if (__DEV__) {
  Box.displayName = 'DecaUI.Box';
}

export default Box;
