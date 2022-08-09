import Box from '@lib/Box';
import Button from '@lib/Button';
import { CSS } from '@lib/Theme';
import { useDOMRef, mergeRefs, useClickOutside } from '@lib/Utils';
import { useTransition } from '@react-spring/web';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import clsx from 'clsx';
import React, { useEffect, SetStateAction, Dispatch } from 'react';
import ReactDOM from 'react-dom';

import { StyledModal, StyledModalOverlay } from './Modal.styles';

export interface ModalProps {
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
   * Have close button appear at the top right corner of the modal
   */
  closeButton?: boolean;
}

export interface IModalContext {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = React.createContext<IModalContext | null>(null);

const Modal = React.forwardRef(
  (
    {
      children,
      open,
      setOpen,
      css,
      className = '',
      closeButton = false,
    }: ModalProps,
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

    return ReactDOM.createPortal(
      transition(
        (style, item) =>
          item && (
            <ModalContext.Provider value={{ setOpen }}>
              {overlayTransition(
                (overlayStyle, overlayItem) =>
                  overlayItem && <StyledModalOverlay style={overlayStyle} />
              )}
              <StyledModal
                ref={mergeRefs(modalRef, clickOutsideRef)}
                style={style}
                className={clsx(className, `${preClass}-root`)}
                css={css}
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
                      icon={<CloseOutline />}
                      css={{
                        mr: '-$3',
                        mt: '-$3',
                        p: '$n',
                        bg: 'transparent',
                        color: '$gray500',
                        '&:hover': {
                          color: '$gray600',
                          bg: 'transparent',
                        },
                        '&:focus': {
                          color: '$gray700',
                          bg: 'transparent',
                        },
                      }}
                      onClick={() => setOpen && setOpen(false)}
                    />
                  </Box>
                )}
                {children}
              </StyledModal>
            </ModalContext.Provider>
          )
      ),
      document.querySelector('body') as Element
    );
  }
);

export default Modal;
