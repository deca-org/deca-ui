import {
  useFloating,
  offset,
  flip,
  autoUpdate,
  UseFloatingReturn,
} from '@floating-ui/react-dom';
import React, {
  useState,
  useEffect,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';

import PopoverContent from './PopoverContent';
import PopoverTrigger from './PopoverTrigger';

export interface PopoverProps {
  /**
   * The content of the component. It is usually the `Popover.Trigger`,
   * and `Popover.Content`
   */
  children?: React.ReactNode[];
  /*
   * if true, the component is shown.
   */
  open?: boolean;
  /**
   * Callback fired when component requests to be closed.
   */
  onClose?(): void;
}

export interface IPopoverContext extends UseFloatingReturn {
  triggerRef?: React.Ref<HTMLElement | undefined>;
  open?: boolean;
  onClose?(): void;
  selfOpen: boolean;
  setSelfOpen: Dispatch<SetStateAction<boolean>>;
  isControlledComponent: boolean;
  mainComponentRef: React.Ref<HTMLDivElement>;
}

export const PopoverContext = React.createContext<IPopoverContext | null>(null);

const Popover = React.forwardRef(
  (
    { children, open, onClose }: PopoverProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const floatingProps = useFloating({
      placement: 'bottom',
      whileElementsMounted: autoUpdate,
      strategy: 'absolute',
      middleware: [offset(10), flip()],
    });

    const [selfOpen, setSelfOpen] = useState<boolean>(false);

    const [scrollPos, setScrollPos] = useState(0);

    const isControlledComponent = useMemo(() => open !== undefined, [open]);

    const isScrolling = () => {
      if (window.scrollY !== scrollPos) {
        isControlledComponent ? onClose && onClose() : setSelfOpen(false);
        setScrollPos(window.scrollY);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', isScrolling);
      return () => {
        window.removeEventListener('scroll', isScrolling);
      };
    }, []);

    const [trigger, content] = React.Children.toArray(children);

    const triggerRef = React.useRef();

    return (
      <PopoverContext.Provider
        value={{
          ...floatingProps,
          triggerRef: triggerRef,
          open: open,
          onClose: onClose,
          isControlledComponent,
          selfOpen,
          setSelfOpen,
          mainComponentRef: ref,
        }}
      >
        {trigger}
        {content}
      </PopoverContext.Provider>
    );
  }
);

type PopoverComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
};

export default Popover as PopoverComponent<HTMLDivElement, PopoverProps>;
