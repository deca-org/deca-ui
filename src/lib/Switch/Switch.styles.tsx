import { styled, theme } from '@lib/Theme';
import { darken } from 'polished';

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
          bg: darken(0.06, theme.colors.primary.value),
        },
      },
      secondary: {
        '&:checked + label::before': {
          bg: '$secondary',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.secondary.value),
        },
      },
      success: {
        '&:checked + label::before': {
          bg: '$success',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.success.value),
        },
      },
      warning: {
        '&:checked + label::before': {
          bg: '$warning',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.warning.value),
        },
      },
      error: {
        '&:checked + label::before': {
          bg: '$error',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.error.value),
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
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&::before': {
    content: '',
    bg: '$gray300',
    br: '$pill',
    transition: '$default',
  },
  '&::after': {
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
          left: 'calc($0 + $space$0)',
          size: 'calc($2 - ($space$0 / 3))',
        },
      },
      md: {
        fontSize: '$body',
        '&::before': {
          width: '$8',
          height: '$4',
        },
        '&::after': {
          left: 'calc($0 + ($space$0 * 1.1))',
          size: 'calc($3 - ($space$0 / 2))',
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
