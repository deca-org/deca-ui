import { styled } from '@lib/Theme';

export const StyledInputMainContainer = styled('div', {
  width: '100%',
  fontFamily: '$normal',
  disabled: {
    true: {
      cursor: 'not-allowed',
    },
    false: {},
  },
});

export const StyledInputLabel = styled('label', {
  display: 'inline-block',
  fontWeight: '$semibold',
  '-webkit-font-smoothing': 'antialiased',
  transition: '$default',
  ml: '$0',
  mb: '$2',
  mt: '0px',
  compoundVariants: [
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'primary',
      css: {
        color: '$primary',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'secondary',
      css: {
        color: '$secondary',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'success',
      css: {
        color: '$success',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'warning',
      css: {
        color: '$warning',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'error',
      css: {
        color: '$error',
      },
    },
    {
      variant: 'outlined',
      state: 'default',
      css: {
        color: '$gray800',
      },
    },
  ],
  variants: {
    size: {
      sm: {
        fontSize: '$footnote',
      },
      md: {
        fontSize: '$caption',
      },
      lg: {
        fontSize: '$caption',
      },
    },
    state: {
      focused: {},
      disabled: {
        color: '$gray500',
      },
      value: {},
      default: {},
    },
    variant: {
      solid: {},
      outlined: {},
    },
    focusColor: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
  },
});

export const StyledInputHelperText = styled('p', {
  fontSize: '$footnote',
  color: '$gray600',
  lineHeight: '$0',
  transition: '$default',
  m: '$n',
  ml: '$0',
  mt: '$2',
  variants: {
    state: {
      focused: {},
      disabled: {
        color: '$gray500',
      },
      value: {},
      default: {
        color: '$gray600',
      },
    },
  },
});

export const StyledInputContainer = styled('div', {
  fontWeight: '$semibold',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  borderWidth: '$normal',
  borderStyle: 'solid',
  transition: '$default',
  compoundVariants: [
    {
      variant: 'solid',
      state: 'focused',
      css: {
        backgroundColor: '$gray300',
        borderColor: '$gray300',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'primary',
      css: {
        borderColor: '$primary',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'secondary',
      css: {
        borderColor: '$secondary',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'success',
      css: {
        borderColor: '$success',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'warning',
      css: {
        borderColor: '$warning',
      },
    },
    {
      variant: 'outlined',
      state: 'focused',
      focusColor: 'error',
      css: {
        borderColor: '$error',
      },
    },
    {
      variant: 'outlined',
      state: 'disabled',
      css: {
        borderColor: '$gray400',
      },
    },
    {
      variant: 'outlined',
      state: 'value',
      css: {},
    },
    {
      variant: 'outlined',
      state: 'default',
      css: {
        borderColor: '$gray700',
      },
    },
  ],
  variants: {
    maxWidth: {
      true: {
        width: '100%',
      },
      false: {},
    },
    size: {
      sm: {
        height: '$6',
        width: '$32',
      },
      md: {
        height: '$9',
        width: '$35',
      },
      lg: {
        height: '$10',
        width: '$35',
      },
    },
    state: {
      focused: {},
      disabled: {
        cursor: 'not-allowed',
      },
      value: {},
      default: {},
    },
    variant: {
      solid: {
        backgroundColor: '$gray200',
        borderColor: '$gray200',
      },
      outlined: {},
    },
    focusColor: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
  },
});

export const StyledInput = styled('input', {
  borderRadius: '$sm',
  border: 'none',
  '&:focus': {
    outline: 0,
  },
  boxSizing: 'border-box',
  size: '100%',
  px: '$2',
  transition: '$default',
  '&::placeholder': {
    color: '$gray600',
    fontWeight: '$semibold',
    opacity: 0.75,
  },
  compoundVariants: [
    {
      variant: 'solid',
      state: 'focused',
      css: {
        backgroundColor: '$gray300',
        borderColor: '$gray300',
      },
    },
  ],
  variants: {
    variant: {
      solid: {
        backgroundColor: '$gray200',
      },
      outlined: {},
    },
    state: {
      focused: {},
      disabled: {
        '&::placeholder': {
          color: '$gray500',
        },
        cursor: 'not-allowed',
      },
      value: {},
      default: {},
    },
  },
});
