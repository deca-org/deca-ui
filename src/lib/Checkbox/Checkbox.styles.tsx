import { styled, theme } from '@lib/Theme';
import { darken } from 'polished';

export const StyledCheckboxWrapper = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$normal',
  transition: '$default',
});

export const StyledCheckbox = styled('input', {
  cursor: 'pointer',
  opacity: 0,
  position: 'absolute',
  transition: '$default',
  '&:checked + label > svg': {
    visibility: 'visible',
    color: '$white',
  },
  compoundVariants: [
    {
      color: 'primary',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$primary',
          borderColor: '$primary',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.primary.value),
          borderColor: darken(0.06, theme.colors.primary.value),
        },
      },
    },
    {
      color: 'secondary',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$secondary',
          borderColor: '$secondary',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.secondary.value),
          borderColor: darken(0.06, theme.colors.secondary.value),
        },
      },
    },
    {
      color: 'success',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$success',
          borderColor: '$success',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.success.value),
          borderColor: darken(0.06, theme.colors.success.value),
        },
      },
    },
    {
      color: 'warning',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$warning',
          borderColor: '$warning',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.warning.value),
          borderColor: darken(0.06, theme.colors.warning.value),
        },
      },
    },
    {
      color: 'error',
      isDisabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$error',
          borderColor: '$error',
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.error.value),
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
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
    isDisabled: {
      true: {
        '&:checked + label::before': {
          bg: '$gray400',
          borderColor: '$gray400',
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

export const StyledCheckboxLabel = styled('label', {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: '$default',
  '&::before': {
    borderColor: '$gray600',
  },
  '& svg': {
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
        '& svg': {
          width: '$1',
          ml: '$1',
          position: 'absolute',
          visibility: 'hidden',
          pt: 'calc($0 / 4)',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$2',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$xs',
          mt: 'calc($0 / 4)',
        },
      },
      md: {
        fontSize: '$body',
        '& svg': {
          width: '$2',
          ml: '$1',
          position: 'absolute',
          visibility: 'hidden',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$3',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$xs',
        },
      },
      lg: {
        fontSize: '$bodyLg',
        '& svg': {
          width: '$3',
          ml: '$1',
          position: 'absolute',
          visibility: 'hidden',
        },
        '&::before': {
          transition: '$default',
          content: '',
          size: '$4',
          borderStyle: 'solid',
          borderWidth: '$normal',
          br: '$xs',
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
