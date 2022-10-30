import { Button } from "../Button"
import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React from 'react';

import { StyledBox } from './Box.styles';

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
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
}

const Box = React.forwardRef(
  (
    { as = 'div', css, children, className = '', ...boxProps }: BoxProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const boxRef = useDOMRef(ref);

    const preClass = 'decaBox';

    return (
      <StyledBox
        as={as}
        css={css}
        className={clsx(className, `${preClass}-root`)}
        ref={boxRef}
        {...boxProps}
      >
        <Button as="a" href="/awd">hello</Button>
        {children}
      </StyledBox>
    );
  }
);

if (__DEV__) {
  Box.displayName = 'DecaUI.Box';
}

export default Box;
