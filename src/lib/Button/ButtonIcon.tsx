import { CSS, styled } from '@lib/Theme';
import React from 'react';

const StyledButtonIcon = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  '& svg': {
    background: 'transparent',
  },
  compoundVariants: [
    {
      isSingle: false,
      side: 'left',
      css: {
        mr: '$1',
      },
    },
    {
      isSingle: false,
      side: 'right',
      css: {
        ml: '$1',
      },
    },
  ],
  variants: {
    size: {
      sm: {
        '& svg': {
          height: 'calc(100% - $1)',
          width: '100%',
        },
      },
      md: {
        '& svg': {
          height: 'calc(100% - $2)',
          width: '100%',
        },
      },
      lg: {
        '& svg': {
          height: 'calc(100% - $3)',
          width: '100%',
        },
      },
    },
    isSingle: {
      true: {
        '& svg': {
          height: 'calc(100% - $1)',
          width: '100%',
        },
      },
      false: {},
    },
    side: {
      left: {},
      right: {},
    },
  },
});

export interface ButtonIconProps {
  children: React.ReactNode | undefined;
  className?: string;
  css?: CSS;
  size?: 'sm' | 'md' | 'lg';
  isSingle?: boolean;
  side?: 'left' | 'right';
}

const ButtonIcon = ({
  children,
  className,
  css,
  size,
  isSingle,
  side,
  ...props
}: ButtonIconProps) => (
  <StyledButtonIcon
    className={className}
    css={css}
    size={size}
    isSingle={isSingle}
    side={side}
    {...props}
  >
    {children}
  </StyledButtonIcon>
);

export default ButtonIcon;
