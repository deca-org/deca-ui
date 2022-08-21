import { mergeRefs, __DEV__ } from '@lib/Utils';
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

  if (context.action === 'click') {
    const extendedOnClick = () => {
      child.onClick && child.onClick();
      context.setOpen && context.setOpen((prevState) => !prevState);
    };

    return React.cloneElement(child, {
      onClick: extendedOnClick,
      ref: mergeRefs(context.reference, child.ref, context.triggerRef),
      ...child.props,
    });
  } else {
    const extendedOnMouseEnter = () => {
      child.onMouseEnter && child.onMouseEnter();
      context.setOpen && context.setOpen(true);
    };

    const extendedOnMouseLeave = () => {
      child.onMouseLeave && child.onMouseLeave();
      context.setOpen && context.setOpen(false);
    };

    return React.cloneElement(child, {
      onMouseEnter: extendedOnMouseEnter,
      onMouseLeave: extendedOnMouseLeave,
      ref: mergeRefs(context.reference, child.ref, context.triggerRef),
    });
  }
};

if (__DEV__) {
  PopoverTrigger.displayName = 'DecaUI.PopoverTrigger';
}

export default PopoverTrigger;
