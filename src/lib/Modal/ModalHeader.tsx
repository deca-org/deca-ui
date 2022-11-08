import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalHeader } from './Modal.styles';

/**
 * ModalHeader allows users to place a header on their modal component
 */
export interface ModalHeaderProps<T extends React.ElementType>
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

const ModalHeader = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className = '',
      css,
      as,
      autoGap,
      ...props
    }: ModalHeaderProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof ModalHeaderProps<T>>,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const context = useContext(ModalContext) as IModalContext;
    const modalHeaderRef = useDOMRef(ref);

    const preClass = 'decaModalHeader';

    return (
      <StyledModalHeader
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={modalHeaderRef}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {children}
      </StyledModalHeader>
    );
  }
);

if (__DEV__) {
  ModalHeader.displayName = 'DecaUI.ModalHeader';
}

export default ModalHeader;
