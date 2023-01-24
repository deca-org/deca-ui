import {
  useFloating,
  offset as floatingOffset,
  flip,
  shift,
  autoUpdate,
  UseFloatingReturn,
  Placement,
} from '@floating-ui/react-dom';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  __DEV__,
} from '@lib/Utils';
import React, {
  useState,
  useEffect,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';

/**
 * A Popover can be used to display some content on top of another.
 */
export interface Props {
  /**
   * The content of the component. It is usually the `Popover.Trigger`,
   * and `Popover.Content`
   */
  children?: React.ReactNode[];
  /*
   * If true, the component is shown.
   */
  open?: boolean;
  /**
   * State dispatcher function (setter in useState)
   */
  setOpen?: Dispatch<SetStateAction<boolean>>;
  /**
   * Placement of the popover component
   * @default bottom
   */
  placement?: Placement;
  /**
   * Determines what action needs to take place in order for popover to appear
   * @default click
   */
  action?: 'click' | 'hover';
  /**
   * How far away PopoverContent should be away from PopoverTrigger when opened
   * @default 10
   */
  offset?: number;
}

export interface IPopoverContext extends UseFloatingReturn {
  triggerRef?: React.Ref<HTMLElement | undefined>;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  mainComponentRef: PolymorphicRef<React.ElementType>;
  action: 'click' | 'hover';
}

export const PopoverContext = React.createContext<IPopoverContext | null>(null);

export type PopoverProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type PopoverComponent = (<C extends React.ElementType = 'div'>(
  props: PopoverProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Popover: PopoverComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      open,
      setOpen,
      placement = 'bottom',
      action = 'click',
      offset = 10,
    }: PopoverProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const floatingProps = useFloating({
      placement: placement,
      whileElementsMounted: autoUpdate,
      strategy: 'absolute',
      middleware: [floatingOffset(offset), flip(), shift()],
    });

    const [selfOpen, setSelfOpen] = useState<boolean>(false);

    const [scrollPos, setScrollPos] = useState(0);

    const isControlledComponent = useMemo(() => open !== undefined, [open]);

    const isScrolling = () => {
      if (window.scrollY !== scrollPos) {
        isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
        setScrollPos(window.scrollY);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        isControlledComponent ? setOpen && setOpen(false) : setSelfOpen(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', isScrolling);
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('scroll', isScrolling);
        window.removeEventListener('keydown', handleEsc);
      };
    }, []);

    const [trigger, content] = React.Children.toArray(children);

    const triggerRef = React.useRef();

    return (
      <PopoverContext.Provider
        value={{
          ...floatingProps,
          triggerRef: triggerRef,
          open: isControlledComponent ? open : selfOpen,
          setOpen: isControlledComponent ? setOpen : setSelfOpen,
          mainComponentRef: ref,
          action,
        }}
      >
        {trigger}
        {content}
      </PopoverContext.Provider>
    );
  }
);

if (__DEV__) {
  Popover.displayName = 'DecaUI.Popover';
}

export default Popover;
