import { ThemeContext } from '@lib/Theme';
import { CSS } from '@lib/Theme/stitches.config';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  mergeRefs,
  useClickOutside,
  __DEV__,
} from '@lib/Utils';
import { animated, useTransition } from '@react-spring/web';
import clsx from 'clsx';
import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import { PopoverContext, IPopoverContext } from './Popover';
import { StyledPopover } from './Popover.styles';

/**
 * PopoverContent contains the content shown when the trigger is executed
 */
interface Props {
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
}

export type PopoverContentProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type PopoverContentComponent = (<C extends React.ElementType = 'div'>(
  props: PopoverContentProps<C>
) => React.ReactElement | null) & { displayName?: string };

const PopoverContent: PopoverContentComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    { children, css, className = '', as, ...props }: PopoverContentProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
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

    const { dark } = React.useContext(ThemeContext);

    const [DOM, setDOM] = useState(false);

    useEffect(() => {
      setDOM(true);
    }, []);

    if (DOM) {
      return ReactDOM.createPortal(
        transition(
          (style, item) =>
            item && (
              <StyledPopover
                style={style}
                ref={mergeRefs(
                  context.mainComponentRef,
                  context.floating,
                  clickOutsideRef,
                  ref
                )}
                css={{
                  position: context.strategy,
                  top: context.y ?? 0,
                  left: context.x ?? 0,
                  ...css,
                }}
                className={clsx(className, `${preClass}-root`)}
                as={animated[as as keyof JSX.IntrinsicElements]}
                isDark={dark}
                {...props}
              >
                {children}
              </StyledPopover>
            )
        ),
        document.getElementById('decaUI-provider')
          ? (document.getElementById('decaUI-provider') as Element)
          : (document.querySelector('body') as Element)
      );
    }
    return <></>;
  }
);

if (__DEV__) {
  PopoverContent.displayName = 'DecaUI.PopoverContent';
}

export default PopoverContent;
