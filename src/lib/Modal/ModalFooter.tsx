import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalFooter } from './Modal.styles';

/**
 * ModalFooter allows users to place content on the bottom of their modal component
 */
export interface ModalFooterProps<T extends React.ElementType>
  extends React.ComponentPropsWithRef<'div'> {
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
   * Changes which tag component outputs.
   */
  as?: T;
  /**
   * Have gap between all elements.
   */
  autoGap?: boolean;
}

const ModalFooter = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className = '',
      css,
      as,
      autoGap,
      ...props
    }: ModalFooterProps<T> &
      Omit<React.ComponentPropsWithRef<T>, keyof ModalFooterProps<T>>,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const context = useContext(ModalContext) as IModalContext;
    const modalFooterRef = useDOMRef(ref);

    const preClass = 'decaModalFooter';

    return (
      <StyledModalFooter
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={modalFooterRef}
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
