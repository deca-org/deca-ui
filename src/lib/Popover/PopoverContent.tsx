import { mergeRefs, useClickOutside } from '@lib/Utils';
import { useTransition } from '@react-spring/web';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { PopoverContext, IPopoverContext } from './Popover';
import { StyledPopoverOverlay } from './Popover.styles';

/**
 * PopoverContent contains the content shown when the trigger is executed
 */
export interface PopoverContentProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
}

const PopoverContent = ({ children }: PopoverContentProps) => {
  const context = useContext(PopoverContext) as IPopoverContext;

  const contentRef = useClickOutside(() => {
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
      tension: 400,
      friction: 19,
    },
  });

  return ReactDOM.createPortal(
    transition(
      (style, item) =>
        item && (
          <StyledPopoverOverlay
            style={style as any}
            ref={mergeRefs(
              context.mainComponentRef,
              context.floating,
              contentRef
            )}
            css={{
              position: context.strategy,
              top: context.y ?? 0,
              left: context.x ?? 0,
            }}
          >
            {children}
          </StyledPopoverOverlay>
        )
    ),
    document.querySelector('body') as Element
  );
};

export default PopoverContent;
