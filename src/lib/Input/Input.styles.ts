import { styled } from '@lib/Theme';

export const StyledInputMainContainer = styled('div', {
  width: '100%',
  fontFamily: '$normal',
  variants: {
    size: {
      sm: {
        width: '$32',
      },
      md: {
        width: '$35',
      },
      lg: {
        width: '$35',
      },
    },
  },
});

export const StyledInputLabel = styled('span', {
  fontWeight: '$semibold',
  '-webkit-font-smoothing': 'antialiased',
  transition: '$default',
  ml: '$0',
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
      focused: {
        color: '$primary',
      },
      disabled: {},
      value: {},
      default: {
        color: '$gray800',
      },
    },
  },
});

export const StyledInputHelperText = styled('p', {
  fontSize: '$footnote',
  color: '$gray600',
  lineHeight: '$0',
  m: '$n',
  ml: '$0',
});

export const StyledInputContainer = styled('div', {
  fontWeight: '$semibold',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  borderWidth: '$normal',
  borderStyle: 'solid',
  transition: '$default',
  mt: '$1',
  mb: '$2',
  variants: {
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
      focused: {
        borderColor: '$primary',
      },
      disabled: {},
      value: {
        borderColor: '',
      },
      default: {
        borderColor: '$gray700',
      },
    },
  },
});
export const StyledInputIcon = styled('span', {});

export const StyledInput = styled('input', {
  borderRadius: '$xs',
  border: 'none',
  '&:focus': {
    outline: 0,
  },
  boxSizing: 'border-box',
  size: '100%',
  px: '$2',
});
