import { CSS } from '@lib/Theme';
import {
  __DEV__,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalBody } from './Modal.styles';

/**
 * ModalBody contains the main content of a modal component
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

export type ModalBodyProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type ModalBodyComponent = (<C extends React.ElementType = 'div'>(
  props: ModalBodyProps<C>
) => React.ReactElement | null) & { displayName?: string };

const ModalBody: ModalBodyComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, className = '', css, as, autoGap, ...props }: ModalBodyProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const context = useContext(ModalContext) as IModalContext;

    const preClass = 'decaModalBody';

    return (
      <StyledModalBody
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={ref}
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
