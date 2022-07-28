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
        mr: '$2',
      },
    },
    {
      isSingle: false,
      side: 'right',
      css: {
        ml: '$2',
      },
    },
    {
      isSingle: false,
      side: 'left',
      size: 'sm',
      css: {
        mr: '$1',
      },
    },
    {
      isSingle: false,
      side: 'right',
      size: 'sm',
      css: {
        ml: '$1',
      },
    },
    {
      isSingle: true,
      size: 'sm',
      css: {
        '& svg': {
          width: '$3',
        },
      },
    },
    {
      isSingle: true,
      size: 'md',
      css: {
        '& svg': {
          width: '$4',
        },
      },
    },
    {
      isSingle: true,
      size: 'lg',
      css: {
        '& svg': {
          width: '$5',
        },
      },
    },
  ],
  variants: {
    size: {
      sm: {
        '& svg': {
          width: '$3',
        },
      },
      md: {
        '& svg': {
          width: '$4',
        },
      },
      lg: {
        '& svg': {
          width: '$5',
        },
      },
    },
    isSingle: {
      true: {},
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
