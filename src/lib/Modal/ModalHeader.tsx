import { CSS } from '@lib/Theme';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalHeader } from './Modal.styles';

/**
 * ModalHeader allows users to place a header on their modal component
 */
export interface ModalHeaderProps {
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

const ModalHeader = React.forwardRef(
  (
    { children, className = '', css, as = 'div', autoGap }: ModalHeaderProps,
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
      >
        {children}
      </StyledModalHeader>
    );
  }
);

export default ModalHeader;
