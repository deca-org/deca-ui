import { CSS } from '@lib/Theme';
import { mergeRefs, useClickOutside } from '@lib/Utils';
import { animated, useTransition } from '@react-spring/web';
import clsx from 'clsx';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { PopoverContext, IPopoverContext } from './Popover';
import { StyledPopover } from './Popover.styles';

/**
 * PopoverContent contains the content shown when the trigger is executed
 */
export interface PopoverContentProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /**
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
  /**
   * Changes which tag component outputs.
   */
  as?: keyof JSX.IntrinsicElements;
}

const PopoverContent = ({
  children,
  css,
  className = '',
  as = 'div',
}: PopoverContentProps) => {
  const context = useContext(PopoverContext) as IPopoverContext;

  const clickOutsideRef = useClickOutside(() => {
    context.setOpen && context.setOpen(false);
  }, [context.triggerRef]);

  const transition = useTransition(context.open, {
    from: {
      scale: 0.75,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0.75,
      opacity: 0,
    },
    config: {
      tension: 300,
      friction: 19,
    },
  });

  const preClass = 'decaPopover';
  return ReactDOM.createPortal(
    transition(
      (style, item) =>
        item && (
          <StyledPopover
            style={style}
            ref={mergeRefs(
              context.mainComponentRef,
              context.floating,
              clickOutsideRef
            )}
            css={{
              position: context.strategy,
              top: context.y ?? 0,
              left: context.x ?? 0,
              ...css,
            }}
            className={clsx(className, `${preClass}-root`)}
            as={animated[as as keyof JSX.IntrinsicElements]}
          >
            {children}
          </StyledPopover>
        )
    ),
    document.querySelector('body') as Element
  );
};

export default PopoverContent;
