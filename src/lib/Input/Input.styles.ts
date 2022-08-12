import { styled } from '@lib/Theme';

export const StyledInputMainContainer = styled('div', {
  width: '100%',
  fontFamily: '$normal',
  isDisabled: {
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
        color: '$gray600',
      },
    },
    {
      variant: 'outlined',
      state: 'value',
      css: {
        color: '$gray600',
      },
    },
  ],
  variants: {
    size: {
      sm: {
        mb: '$1',
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
      isDisabled: {
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
    pill: {
      true: {
        ml: '$2',
      },
      false: {},
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
    size: {
      sm: {
        mt: '$1',
      },
      md: {},
      lg: {},
    },
    state: {
      focused: {},
      isDisabled: {
        color: '$gray500',
      },
      value: {
        color: '$gray600',
      },
      default: {
        color: '$gray600',
      },
    },
    pill: {
      true: {
        ml: '$2',
      },
      false: {},
    },
  },
});

export const StyledInputContainer = styled('div', {
  fontWeight: '$medium',
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
      state: 'isDisabled',
      css: {
        borderColor: '$gray400',
      },
    },
    {
      variant: 'outlined',
      state: 'value',
      css: {
        borderColor: '$gray400',
      },
    },
    {
      variant: 'outlined',
      state: 'default',
      css: {
        borderColor: '$gray400',
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
      isDisabled: {
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
    pill: {
      true: {
        borderRadius: '$pill',
      },
      false: {
        borderRadius: '$sm',
      },
    },
  },
});

export const StyledInput = styled('input', {
  border: 'none',
  '&:focus': {
    outline: 0,
  },
  boxSizing: 'border-box',
  size: '100%',
  px: '$2',
  transition: '$default',
  '&::placeholder': {
    color: '$gray700',
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
    size: {
      sm: {
        fontSize: '$footnote',
      },
      md: {
        fontSize: '$body',
      },
      lg: {
        fontSize: '$body',
      },
    },
    state: {
      focused: {},
      isDisabled: {
        '&::placeholder': {
          color: '$gray500',
        },
        cursor: 'not-allowed',
      },
      value: {},
      default: {},
    },
    pill: {
      true: {
        px: '$3',
        borderRadius: '$pill',
      },
      false: {
        borderRadius: '$sm',
      },
    },
  },
});
