import { styled } from '@lib/Theme/stitches.config';
import { getStaticColor } from '@lib/Utils';
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
    opacity: 1,
  },
  compoundVariants: [
    {
      isDisabled: true,
      isDark: true,
      css: {
        '&:checked + label::before': {
          opacity: '50%',
        },
        '&:checked + label > svg': {
          opacity: '30%',
        },
      },
    },
    {
      isDisabled: true,
      isDark: false,
      css: {
        '&:checked + label::before': {
          opacity: '55%',
        },
        '&:checked + label > svg': {
          opacity: '90%',
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
        '&:checked + label::before': {
          bg: '$primary',
          borderColor: '$primary',
        },
        '&:checked:active + label::before': {
          bg: '$primary-darken-1',
          borderColor: '$primary-darken-1',
        },
      },
      secondary: {
        '&:checked + label::before': {
          bg: '$secondary',
          borderColor: '$secondary',
        },
        '&:checked:active + label::before': {
          bg: '$secondary-darken-1',
          borderColor: '$secondary-darken-1',
        },
      },
      success: {
        '&:checked + label::before': {
          bg: '$success',
          borderColor: '$success',
        },
        '&:checked:active + label::before': {
          bg: '$success-darken-1',
          borderColor: '$success-darken-1',
        },
      },
      warning: {
        '&:checked + label::before': {
          bg: '$warning',
          borderColor: '$warning',
        },
        '&:checked:active + label::before': {
          bg: '$warning-darken-1',
          borderColor: '$warning-darken-1',
        },
      },
      error: {
        '&:checked + label::before': {
          bg: '$error',
          borderColor: '$error',
        },
        '&:checked:active + label::before': {
          bg: '$error-darken-1',
          borderColor: '$error-darken-1',
        },
      },
    },
    isDisabled: {
      true: {},
      false: {
        '&:focus-visible + label::before': {
          boxShadow: '$a11y',
        },
      },
    },
    isDark: {
      true: {},
      false: {},
    },
  },
});

export const StyledCheckboxLabel = styled('label', {
  color: '$text',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: '$default',
  '&::before': {
    boxSizing: 'content-box',
    borderColor: '$gray600',
  },
  '& svg': {
    color: '$white',
    opacity: 0,
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
    {
      isDisabled: true,
      isDark: true,
      css: {
        color: '$gray700',
        '&::before': {
          borderColor: '$gray700',
        },
      },
    },

    {
      isDisabled: true,
      isDark: false,
      css: {
        color: '$gray500',
        '&::before': {
          borderColor: '$gray400',
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
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
      },
      false: {
        '&:hover::before': {
          transition: '$default',
          borderColor: darken(0.125, getStaticColor('gray600')),
        },
      },
    },
    hasLabel: {
      true: {},
      false: {},
    },
    isDark: {
      true: {},
      false: {},
    },
  },
});
