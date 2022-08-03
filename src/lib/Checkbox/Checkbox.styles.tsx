import { styled, theme } from '@lib/Theme';
import { darken, transparentize } from 'polished';

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
  '&:focus-visible + label::before': {
    boxShadow: '$a11y',
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$primary',
          borderColor: '$primary',
        },
        '&:active + label::before': {
          borderColor: darken(0.06, theme.colors.primary.value),
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.primary.value),
          borderColor: darken(0.06, theme.colors.primary.value),
        },
      },
    },
    {
      color: 'secondary',
      disabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$secondary',
          borderColor: '$secondary',
        },
        '&:active + label::before': {
          borderColor: darken(0.06, theme.colors.secondary.value),
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.secondary.value),
          borderColor: darken(0.06, theme.colors.secondary.value),
        },
      },
    },
    {
      color: 'success',
      disabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$success',
          borderColor: '$success',
        },
        '&:active + label::before': {
          borderColor: darken(0.06, theme.colors.success.value),
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.success.value),
          borderColor: darken(0.06, theme.colors.success.value),
        },
      },
    },
    {
      color: 'warning',
      disabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$warning',
          borderColor: '$warning',
        },
        '&:active + label::before': {
          borderColor: darken(0.06, theme.colors.warning.value),
        },
        '&:checked:active + label::before': {
          bg: darken(0.06, theme.colors.warning.value),
          borderColor: darken(0.06, theme.colors.warning.value),
        },
      },
    },
    {
      color: 'error',
      disabled: false,
      css: {
        '&:checked + label::before': {
          bg: '$error',
          borderColor: '$error',
        },
        '&:active + label::before': {
          borderColor: darken(0.06, theme.colors.error.value),
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
    disabled: {
      true: {
        '&:checked + label::before': {
          bg: '$gray400',
          borderColor: '$gray400',
        },
      },
      false: {},
    },
  },
});

export const StyledCheckboxLabel = styled('label', {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: '$default',
  '&:hover::before': {
    transition: '$default',
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: false,
      css: {
        '&::before': {
          borderColor: '$primary',
        },
        '&:hover::before': {
          borderColor: darken(0.04, theme.colors.primary.value),
        },
      },
    },
    {
      color: 'secondary',
      disabled: false,
      css: {
        '&::before': {
          borderColor: '$secondary',
        },
        '&:hover::before': {
          borderColor: darken(0.04, theme.colors.secondary.value),
        },
      },
    },
    {
      color: 'success',
      disabled: false,
      css: {
        '&::before': {
          borderColor: '$success',
        },
        '&:hover::before': {
          borderColor: darken(0.04, theme.colors.success.value),
        },
      },
    },
    {
      color: 'warning',
      disabled: false,
      css: {
        '&::before': {
          borderColor: '$warning',
        },
        '&:hover::before': {
          borderColor: darken(0.04, theme.colors.warning.value),
        },
      },
    },
    {
      color: 'error',
      disabled: false,
      css: {
        '&::before': {
          borderColor: '$error',
        },
        '&:hover::before': {
          borderColor: darken(0.04, theme.colors.error.value),
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
          mr: '$1',
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
          mr: '$2',
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
      false: {},
    },
  },
});
