import { styled } from '@lib/Theme/stitches.config';

export const StyledInputMainContainer = styled('div', {
  width: '100%',
  fontFamily: '$normal',
  compoundVariants: [
    {
      size: 'sm',
      maxWidth: false,
      css: {
        width: '$32',
      },
    },
    {
      size: 'md',
      maxWidth: false,
      css: {
        width: '$35',
      },
    },
    {
      size: 'lg',
      maxWidth: false,
      css: {
        width: '$35',
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
    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
      false: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
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
  color: '$text',
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
        color: '$text',
      },
    },
    {
      variant: 'outlined',
      state: 'value',
      css: {
        color: '$text',
      },
    },
    {
      state: 'isDisabled',
      isDark: 'true',
      css: {
        color: '$gray700',
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
    isDark: {
      true: {},
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
  compoundVariants: [
    {
      state: 'isDisabled',
      isDark: true,
      css: {
        color: '$gray700',
      },
    },
    {
      state: 'value',
      isDark: true,
      css: {
        color: '$text',
      },
    },
    {
      state: 'default',
      isDark: true,
      css: {
        color: '$text',
      },
    },
  ],
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
    isDark: {
      true: {
        color: '$text',
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
      isDark: false,
      css: {
        backgroundColor: '$gray200',
        borderColor: '$gray200',
      },
    },
    {
      variant: 'solid',
      state: 'focused',
      isDark: false,
      css: {
        backgroundColor: '$gray300',
        borderColor: '$gray300',
      },
    },
    {
      variant: 'solid',
      isDark: true,
      css: {
        backgroundColor: '$gray900',
        borderColor: '$gray900',
      },
    },
    {
      variant: 'solid',
      state: 'focused',
      isDark: true,
      css: {
        backgroundColor: '$gray800',
        borderColor: '$gray800',
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
    {
      variant: 'outlined',
      state: 'value',
      isDark: true,
      css: {
        borderColor: '$gray700',
      },
    },
    {
      variant: 'outlined',
      state: 'default',
      isDark: true,
      css: {
        borderColor: '$gray700',
      },
    },
    {
      variant: 'outlined',
      state: 'isDisabled',
      isDark: true,
      css: {
        borderColor: '$gray800',
      },
    },
    {
      variant: 'solid',
      state: 'isDisabled',
      isDark: true,
      css: {
        borderColor: '$gray900',
      },
    },
    {
      size: 'sm',
      maxWidth: false,
      css: {
        width: '$32',
      },
    },
    {
      size: 'md',
      maxWidth: false,
      css: {
        width: '$35',
      },
    },
    {
      size: 'lg',
      maxWidth: false,
      css: {
        width: '$35',
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
      },
      md: {
        height: '$9',
      },
      lg: {
        height: '$10',
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
        borderRadius: '$pill',
      },
      false: {
        borderRadius: '$sm',
      },
    },
    isDark: {
      true: {},
      false: {},
    },
  },
});

export const StyledInput = styled('input', {
  color: '$text',
  bg: '$transparent',
  border: 'none',
  '&:focus': {
    outline: 0,
  },
  boxSizing: 'border-box',
  size: '100%',
  paddingRight: 'calc($2 * 1.5)',
  paddingLeft: 'calc($2 * 1.5)',
  transition: '$default',
  '&::placeholder': {
    color: '$gray700',
    opacity: 0.75,
  },
  compoundVariants: [
    {
      variant: 'solid',
      isDark: false,
      css: {
        backgroundColor: '$gray200',
      },
    },
    {
      variant: 'solid',
      state: 'focused',
      isDark: false,
      css: {
        backgroundColor: '$gray300',
        borderColor: '$gray300',
      },
    },
    {
      variant: 'solid',
      isDark: true,
      css: {
        backgroundColor: '$gray900',
      },
    },
    {
      variant: 'solid',
      state: 'focused',
      isDark: true,
      css: {
        backgroundColor: '$gray800',
        borderColor: '$gray800',
      },
    },
    {
      variant: 'outlined',
      state: 'isDisabled',
      isDark: true,
      css: {
        '&::placeholder': {
          color: '$gray600',
        },
        cursor: 'not-allowed',
      },
    },
    {
      variant: 'solid',
      state: 'isDisabled',
      isDark: true,
      css: {
        '&::placeholder': {
          color: '$gray700',
        },
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    variant: {
      solid: {},
      outlined: {},
    },
    size: {
      sm: {
        fontSize: '$footnote',
      },
      md: {
        fontSize: '$bodySm',
      },
      lg: {
        fontSize: '$bodySm',
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
    isDark: {
      true: {
        '&::placeholder': {
          color: '$gray100',
        },
      },
      false: {},
    },
  },
});
