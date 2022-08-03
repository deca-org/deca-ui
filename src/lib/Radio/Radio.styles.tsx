import { styled, theme } from '@lib/Theme';
import { darken } from 'polished';

export const StyledRadioWrapper = styled('div', {
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
  '&:focus-visible + label::before': {
    boxShadow: '$a11y',
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
    disabled: {
      true: {
        '&:checked + label::before': {
          borderColor: '$gray400',
        },
        '&:checked + label > div': {
          bg: '$gray400',
        },
      },
      false: {},
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
  },
  variants: {
    size: {
      sm: {
        fontSize: '$caption',
        '& div': {
          transition: '$default',
          size: '$1',
          ml: '$1',
          position: 'absolute',
          visibility: 'hidden',
          mt: 'calc($0 / 4)',
          br: '$pill',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$2',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$pill',
          mr: '$1',
          mt: 'calc($0 / 4)',
        },
      },
      md: {
        fontSize: '$body',
        '& div': {
          transition: '$default',
          size: '$2',
          ml: '$1',
          position: 'absolute',
          visibility: 'hidden',
          br: '$pill',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$3',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$pill',
          mr: '$2',
        },
      },
      lg: {
        fontSize: '$bodyLg',
        '& div': {
          transition: '$default',
          size: 'calc($3 * 0.925)',
          ml: 'calc($1 * 1.125)',
          position: 'absolute',
          visibility: 'hidden',
          br: '$pill',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$4',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$pill',
          mr: '$2',
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
    disabled: {
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
  },
});
