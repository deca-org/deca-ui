import { styled } from '@lib/Theme/stitches.config';

export const StyledContainer = styled('div', {
  w: '100%',
  mr: 'auto',
  ml: 'auto',
  variants: {
    px: {
      none: {
        px: '$n',
      },
      sm: {
        px: '$1',
      },
      md: {
        px: '$2',
      },
      lg: {
        px: '$3',
      },
    },
    fluid: {
      true: {
        maxWidth: '100%',
      },
    },
    responsive: {
      true: {
        '@xs': {
          maxWidth: '$breakpoints$xs',
        },
        '@sm': {
          maxWidth: '$breakpoints$sm',
        },
        '@md': {
          maxWidth: '$breakpoints$md',
        },
        '@lg': {
          maxWidth: '$breakpoints$lg',
        },
        '@xl': {
          maxWidth: '$breakpoints$xl',
        },
      },
    },
  },
});
