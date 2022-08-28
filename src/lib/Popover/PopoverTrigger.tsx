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
      context.setOpen && context.setOpen((prevState) => !prevState);
      child.props.onClick && child.props.onClick();
    };

    return React.cloneElement(child, {
      ...child.props,
      onClick: extendedOnClick,
      ref: mergeRefs(context.reference, child.ref, context.triggerRef),
    });
  } else {
    const extendedOnMouseEnter = () => {
      context.setOpen && context.setOpen(true);
      child.props.onMouseEnter && child.props.onMouseEnter();
    };

    const extendedOnMouseLeave = () => {
      context.setOpen && context.setOpen(false);
      child.props.onMouseLeave && child.props.onMouseLeave();
    };

    return React.cloneElement(child, {
      ...child.props,
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
