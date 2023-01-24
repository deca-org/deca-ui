import { CSS } from '@lib/Theme/stitches.config';
import {
  __DEV__,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalFooter } from './Modal.styles';

/**
 * ModalFooter allows users to place content on the bottom of their modal component
 */
interface Props {
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
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * Have gap between all elements.
   */
  autoGap?: boolean;
}

export type ModalFooterProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type ModalFooterComponent = (<C extends React.ElementType = 'div'>(
  props: ModalFooterProps<C>
) => React.ReactElement | null) & { displayName?: string };

const ModalFooter: ModalFooterComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className = '',
      css,
      as,
      autoGap,
      ...props
    }: ModalFooterProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const context = useContext(ModalContext) as IModalContext;

    const preClass = 'decaModalFooter';

    return (
      <StyledModalFooter
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={ref}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {children}
      </StyledModalFooter>
    );
  }
);

if (__DEV__) {
  ModalFooter.displayName = 'DecaUI.ModalFooter';
}

export default ModalFooter;
