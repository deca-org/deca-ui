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
        px: '$2',
      },
      md: {
        px: '$3',
      },
      lg: {
        px: '$4',
      },
    },
    responsive: {
      true: {
        '@n': {
          maxWidth: '$breakpoints$xs',
        },
        '@xs': {
          maxWidth: '$breakpoints$xs',
        },
        '@sm': {
          maxWidth: '$breakpoints$sm',
        },
        '@md': {
          maxWidth: '$breakpoints$sm',
        },
        '@lg': {
          maxWidth: '$breakpoints$md',
        },
        '@xl': {
          maxWidth: '$breakpoints$lg',
        },
      },
    },
    fluid: {
      true: {
        maxWidth: '100%',
      },
    },
  },
});
