import { ThemeContext } from '@lib/Theme';
import Box from '@lib/Box';
import Button from '@lib/Button';
import { CSS } from '@lib/Theme/stitches.config';
import { useDOMRef, mergeRefs, useClickOutside, __DEV__ } from '@lib/Utils';
import { animated, useTransition } from '@react-spring/web';
import clsx from 'clsx';
import React, { useEffect, useState, SetStateAction, Dispatch } from 'react';
import ReactDOM from 'react-dom';

import {
  StyledModal,
  StyledModalFlexbox,
  StyledModalOverlay,
} from './Modal.styles';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export interface ModalProps<T extends React.ElementType>
  extends React.ComponentPropsWithRef<'div'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /*
   * If true, the component is shown.
   */
  open?: boolean;
  /**
   * State dispatcher function (setter in useState)
   */
  setOpen?: Dispatch<SetStateAction<boolean>>;
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
   * Have close button appear at the top right corner of the modal.
   */
  closeButton?: boolean;
  /**
   * Have gap between all elements.
   * @default true
   */
  autoGap?: boolean;
  /**
   * Remove padding applied to Modal component.
   * @default false
   */
  noPadding?: boolean;
  /**
   * Changes which tag component outputs.
   */
  as?: T;
}

export interface IModalContext {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  autoGap?: boolean;
}

export const ModalContext = React.createContext<IModalContext | null>(null);

const CloseButton = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g data-name="Layer 2">
      <path
        d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
        data-name="close"
      ></path>
    </g>
  </svg>
);

const Modal = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      open,
      setOpen,
      css,
      className = '',
      closeButton = false,
      autoGap = true,
      noPadding = false,
      as,
      ...props
    }: ModalProps<T> &
      Omit<React.ComponentPropsWithRef<T>, keyof ModalProps<T>>,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen && setOpen(false);
      }
    };

    const modalRef = useDOMRef(ref);

    useEffect(() => {
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }, []);

    const transition = useTransition(open, {
      from: {
        scale: 0.75,
        opacity: 0,
      },
      enter: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1,
        opacity: 1,
      },
      leave: {
        scale: 0.75,
        opacity: 0,
      },
      config: {
        tension: 220,
        friction: 18,
      },
    });

    const overlayTransition = useTransition(open, {
      from: {
        opacity: 0,
      },
      enter: {
        scale: 1,
        opacity: 1,
      },
      leave: {
        opacity: 0,
      },
      config: {
        duration: 120,
      },
    });

    const clickOutsideRef = useClickOutside(() => {
      setOpen && setOpen(false);
    });

    const preClass = 'decaModal';

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
              <ModalContext.Provider value={{ setOpen, autoGap }}>
                {overlayTransition(
                  (overlayStyle, overlayItem) =>
                    overlayItem && <StyledModalOverlay style={overlayStyle} />
                )}
                <StyledModal
                  ref={mergeRefs(modalRef, clickOutsideRef)}
                  style={style}
                  className={clsx(className, `${preClass}-root`)}
                  css={css}
                  noPadding={noPadding}
                  as={animated[as as keyof JSX.IntrinsicElements]}
                  isDark={dark}
                  {...props}
                >
                  {closeButton && (
                    <Box
                      css={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        variant="ghost"
                        pill
                        icon={<CloseButton />}
                        css={{
                          mr: noPadding ? '-$0' : '-$3',
                          mt: noPadding ? '-$0' : '-$3',
                          p: '$n',
                          bg: 'transparent',
                          color: dark ? '$gray700' : '$gray500',
                          '&:hover': {
                            color: '$gray600',
                            bg: 'transparent',
                            borderColor: '$transparent',
                          },
                          '&:focus': {
                            color: dark ? '$gray500' : '$gray700',
                            bg: 'transparent',
                          },
                        }}
                        onClick={() => setOpen && setOpen(false)}
                      />
                    </Box>
                  )}
                  <StyledModalFlexbox
                    className={`${preClass}-flexbox`}
                    autoGap={autoGap}
                  >
                    {children}
                  </StyledModalFlexbox>
                </StyledModal>
              </ModalContext.Provider>
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

type ModalComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

if (__DEV__) {
  Modal.displayName = 'DecaUI.Modal';
}

export default Modal as ModalComponent<
  HTMLDivElement,
  ModalProps<React.ElementType>
>;
