import { styled } from '@lib/Theme/stitches.config';

export const StyledSwitchWrapper = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$normal',
  transition: '$default',
});

export const StyledSwitchInput = styled('input', {
  opacity: 0,
  position: 'absolute',
  cursor: 'pointer',
  '&:focus-visible + label::before': {
    boxShadow: '$a11y',
  },
  variants: {
    size: {
      sm: {
        '&:checked + label::after': {
          transform: 'translateX(calc(100% + $space$0))',
        },
        '&:active + label::after': {
          pr: '$1',
        },
        '&:checked:active + label::after': {
          transform: 'translateX(calc(100% - ($space$1 + $space$0)))',
        },
      },
      md: {
        '&:checked + label::after': {
          transform: 'translateX(calc(100% - $space$0))',
        },
        '&:active + label::after': {
          pr: '$1',
        },
        '&:checked:active + label::after': {
          transform: 'translateX(calc(100% - ($space$0 + $space$2)))',
        },
      },
      lg: {
        '&:checked + label::after': {
          transform: 'translateX(calc(100% - $space$1))',
        },
        '&:active + label::after': {
          pr: '$1',
        },
        '&:checked:active + label::after': {
          transform: 'translateX(calc(100% - ($space$1 + $space$2)))',
        },
      },
    },
    color: {
      primary: {
        '&:checked + label::before': {
          bg: '$primary',
        },
        '&:checked:active + label::before': {
          bg: '$primary-darken-1',
        },
      },
      secondary: {
        '&:checked + label::before': {
          bg: '$secondary',
        },
        '&:checked:active + label::before': {
          bg: '$secondary-darken-1',
        },
      },
      success: {
        '&:checked + label::before': {
          bg: '$success',
        },
        '&:checked:active + label::before': {
          bg: '$success-darken-1',
        },
      },
      warning: {
        '&:checked + label::before': {
          bg: '$warning',
        },
        '&:checked:active + label::before': {
          bg: '$warning-darken-1',
        },
      },
      error: {
        '&:checked + label::before': {
          bg: '$error',
        },
        '&:checked:active + label::before': {
          bg: '$error-darken-1',
        },
      },
    },
    isDisabled: {
      true: {
        '&:checked + label::before': {
          bg: '$gray200',
        },
      },
      false: {},
    },
  },
});

export const StyledSwitchLabel = styled('label', {
  position: 'relative',
  boxSizing: 'content-box',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&::before': {
    boxSizing: 'content-box',
    content: '',
    bg: '$gray300',
    br: '$pill',
    transition: '$default',
  },
  '&::after': {
    boxSizing: 'content-box',
    position: 'absolute',
    content: '',
    bg: '$white',
    br: '$pill',
    transition: '$default',
  },
  compoundVariants: [
    {
      hasLabel: true,
      size: 'sm',
      css: {
        '&::before': {
          mr: '$1',
        },
      },
    },
    {
      hasLabel: true,
      size: 'md',
      css: {
        '&::before': {
          mr: '$2',
        },
      },
    },
    {
      hasLabel: true,
      size: 'lg',
      css: {
        '&::before': {
          mr: '$2',
        },
      },
    },
  ],
  variants: {
    size: {
      sm: {
        fontSize: '$caption',
        '&::before': {
          width: '$7',
          height: '$3',
        },
        '&::after': {
          left: 'calc($0 + $space$1 - $space$1)',
          size: 'calc($4 - $space$2)',
        },
      },
      md: {
        fontSize: '$body',
        '&::before': {
          width: '$8',
          height: '$4',
        },
        '&::after': {
          left: 'calc($0 + $space$1 - $space$0 / 2)',
          size: 'calc($4 - $space$1 - $space$0)',
        },
      },
      lg: {
        fontSize: '$bodyLg',
        '&::before': {
          width: '$9',
          height: '$5',
        },
        '&::after': {
          left: 'calc($0 + $space$0)',
          size: 'calc($4 - $space$0)',
        },
      },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        '&::before': {
          bg: '$gray200',
        },
        '&::after': {
          bg: '$gray400',
        },
      },
      false: {},
    },
    hasLabel: {
      true: {},
      false: {},
    },
  },
});
