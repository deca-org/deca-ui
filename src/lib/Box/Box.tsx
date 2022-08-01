import { CSS } from '@lib/Theme';
import { useDOMRef } from '@lib/Utils';
import React from 'react';

import StyledBox from './Box.styles';

/**
 * The Box component serves as a wrapper component
 */
export interface BoxProps extends React.ComponentPropsWithRef<'div'> {
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
}

const Box = React.forwardRef(
  (
    { as = 'div', css, children, ...boxProps }: BoxProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const boxRef = useDOMRef(ref);

    const preClass = 'decaBox';

    return (
      <StyledBox
        as={as}
        css={css}
        className={`${preClass}-root`}
        ref={boxRef}
        {...boxProps}
      >
        {children}
      </StyledBox>
    );
  }
);

export default Box;
