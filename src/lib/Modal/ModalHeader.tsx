import { CSS } from '@lib/Theme/stitches.config';
import {
  __DEV__,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@lib/Utils';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ModalContext, IModalContext } from './Modal';
import { StyledModalHeader } from './Modal.styles';

/**
 * ModalHeader allows users to place a header on their modal component
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

export type ModalHeaderProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type ModalHeaderComponent = (<C extends React.ElementType = 'div'>(
  props: ModalHeaderProps<C>
) => React.ReactElement | null) & { displayName?: string };

const ModalHeader: ModalHeaderComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      className = '',
      css,
      as,
      autoGap,
      ...props
    }: ModalHeaderProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const context = useContext(ModalContext) as IModalContext;

    const preClass = 'decaModalHeader';

    return (
      <StyledModalHeader
        autoGap={autoGap !== undefined ? autoGap : context.autoGap}
        ref={ref}
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
