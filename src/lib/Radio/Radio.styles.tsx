import { styled, theme } from '@lib/Theme';
import { darken } from 'polished';

export const StyledRadioWrapper = styled('div', {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$normal',
  transition: '$default',
});

export const StyledRadio = styled('input', {
  cursor: 'pointer',
  opacity: 0,
  position: 'absolute',
  transition: '$default',
  '&:checked + label > div': {
    visibility: 'visible',
  },
  compoundVariants: [
    {
      color: 'primary',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          borderColor: '$primary',
        },
        '&:checked:active + label::before': {
          borderColor: darken(0.06, theme.colors.primary.value),
        },
      },
    },
    {
      color: 'secondary',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          borderColor: '$secondary',
        },
        '&:checked:active + label::before': {
          borderColor: darken(0.06, theme.colors.secondary.value),
        },
      },
    },
    {
      color: 'success',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          borderColor: '$success',
        },
        '&:checked:active + label::before': {
          borderColor: darken(0.06, theme.colors.success.value),
        },
      },
    },
    {
      color: 'warning',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          borderColor: '$warning',
        },
        '&:checked:active + label::before': {
          borderColor: darken(0.06, theme.colors.warning.value),
        },
      },
    },
    {
      color: 'error',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          borderColor: '$error',
        },
        '&:checked:active + label::before': {
          borderColor: darken(0.06, theme.colors.error.value),
        },
      },
    },
  ],
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    color: {
      primary: {
        '&:checked + label > div': {
          bg: '$primary',
        },
      },
      secondary: {
        '&:checked + label > div': {
          bg: '$secondary',
        },
      },
      success: {
        '&:checked + label > div': {
          bg: '$success',
        },
      },
      warning: {
        '&:checked + label > div': {
          bg: '$warning',
        },
      },
      error: {
        '&:checked + label > div': {
          bg: '$error',
        },
      },
    },

    isDisabled: {
      true: {
        pointerEvents: 'none',
        '&:checked + label::before': {
          borderColor: '$gray400',
        },
        '&:checked + label > div': {
          bg: '$gray400',
        },
      },
      false: {
        '&:focus-visible + label::before': {
          boxShadow: '$a11y',
        },
      },
    },
  },
});

export const StyledRadioLabel = styled('label', {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: '$default',
  '&::before': {
    borderColor: '$gray600',
    br: '$pill',
    borderStyle: 'solid',
    borderWidth: '$normal',
    transition: '$default',
    content: '',
  },
  '& div': {
    br: '$pill',
    position: 'absolute',
    transition: '$default',
    visibility: 'hidden',
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
        '& div': {
          size: '$1',
          ml: '$1',
          mt: 'calc($0 / 4)',
        },
        '&::before': {
          size: '$2',
          mt: 'calc($0 / 4)',
        },
      },
      md: {
        fontSize: '$body',
        '& div': {
          size: '$2',
          ml: '$1',
        },
        '&::before': {
          size: '$3',
        },
      },
      lg: {
        fontSize: '$bodyLg',
        '& div': {
          size: 'calc($3 * 0.925)',
          ml: 'calc($1 * 1.125)',
        },
        '&::before': {
          size: '$4',
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
        color: '$gray500',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        '&::before': {
          borderColor: '$gray400',
        },
      },
      false: {
        '&:hover::before': {
          transition: '$default',
          borderColor: darken(0.125, theme.colors.gray600.value),
        },
      },
    },
    hasLabel: {
      true: {},
      false: {},
    },
  },
});
