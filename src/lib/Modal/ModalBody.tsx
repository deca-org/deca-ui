import { CSS } from '@lib/Theme';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalBody } from './Modal.styles';

/**
 * ModalBody contains the main content of a modal component
 */
export interface ModalBodyProps<T extends React.ElementType>
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

const ModalBody = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className = '',
      css,
      as,
      autoGap,
      ...props
    }: ModalBodyProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof ModalBodyProps<T>>,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const context = useContext(ModalContext) as IModalContext;
    const modalBodyRef = useDOMRef(ref);

    const preClass = 'decaModalBody';

    return (
      <StyledModalBody
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={modalBodyRef}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {children}
      </StyledModalBody>
    );
  }
);

if (__DEV__) {
  ModalBody.displayName = 'DecaUI.ModalBody';
}

export default ModalBody;
