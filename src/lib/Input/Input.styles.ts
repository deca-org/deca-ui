import { CSS, standardColors, styled, theme } from '@lib/Theme';
import { darken, readableColor, rem, transparentize } from 'polished';

export const StyledInputMainContainer = styled('div', {});

export const StyledInputLabel = styled('span', {
  fontWeight: '$semibold',
  fontFamily: '$normal',
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

export const StyledInputContainer = styled('div', {
  fontWeight: '$semibold',
  fontFamily: '$normal',
  borderRadius: '$xs',
  borderWidth: '$normal',
  borderStyle: 'solid',
  transition: '$default',
  width: '$7',
  variants: {
    size: {
      sm: {
        mt: '$1',
        height: rem(36),
      },
      md: {
        mt: '$1',
        height: rem(40),
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
