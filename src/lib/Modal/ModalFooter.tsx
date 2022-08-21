import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalFooter } from './Modal.styles';

/**
 * ModalFooter allows users to place content on the bottom of their modal component
 */
export interface ModalFooterProps {
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
  as?: keyof JSX.IntrinsicElements;
  /**
   * Have gap between all elements.
   */
  autoGap?: boolean;
}

const ModalFooter = React.forwardRef(
  (
    { children, className = '', css, as = 'div', autoGap }: ModalFooterProps,
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
