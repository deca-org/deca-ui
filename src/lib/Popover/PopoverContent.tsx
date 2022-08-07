import { mergeRefs, useClickOutside } from '@lib/Utils';
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
    if (context.isControlledComponent) {
      context.onClose && context.onClose();
    } else {
      context.setSelfOpen(false);
    }
  }, [context.triggerRef]);

  const open = context.isControlledComponent ? context.open : context.selfOpen;
  return ReactDOM.createPortal(
    open && (
      <StyledPopoverOverlay
        ref={mergeRefs(context.mainComponentRef, context.floating, contentRef)}
        css={{
          position: context.strategy,
          top: context.y ?? 0,
          left: context.x ?? 0,
        }}
      >
        {children}
      </StyledPopoverOverlay>
    ),
    document.querySelector('body') as Element
  );
};

export default PopoverContent;
