import { mergeRefs } from '@lib/Utils';
import React, { useContext } from 'react';

import { PopoverContext, IPopoverContext } from './Popover';

/**
 * PopoverTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
export interface PopoverTriggerProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
}

const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const context = useContext(PopoverContext) as IPopoverContext;

  // enforce single child
  const child: any = React.Children.only(children);

  const extendedOnClick = () => {
    child.onClick && child.onClick();
    context.setSelfOpen((prevState) => !prevState);
  };

  return React.cloneElement(child, {
    onClick: extendedOnClick,
    ref: mergeRefs(context.reference, child.ref, context.triggerRef),
    ...child.props,
  });
};

export default PopoverTrigger;
