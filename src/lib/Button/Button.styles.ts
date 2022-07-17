import { CSS, standardColors, styled, theme } from '@lib/Theme';
import { darken, readableColor, transparentize } from 'polished';

const compoundVariantComposer = () => {
  const colorVariants: {
    disabled?: boolean;
    color?: string;
    variant?: 'solid' | 'outlined' | 'ghost';
    css: CSS;
  }[] = [];

  Object.entries(standardColors).map((color) => {
    colorVariants.push(
      {
        disabled: false,
        color: color[0],
        variant: 'solid',
        css: {
          color: readableColor(
            darken(0.25, theme.colors[color[1]].value),
            '#FFFFFF',
            '#000000'
          ),
          '&:hover': {
            borderColor: darken(0.04, theme.colors[color[1]].value),
            bg: darken(0.04, theme.colors[color[1]].value),
          },
          '&:active': {
            borderColor: darken(0.09, theme.colors[color[1]].value),
            bg: darken(0.09, theme.colors[color[1]].value),
          },
        },
      },
      {
        disabled: true,
        color: color[0],
        variant: 'solid',
        css: {
          color: readableColor(
            darken(0.25, theme.colors[color[1]].value),
            '#FFFFFF',
            '#000000'
          ),
        },
      },
      {
        disabled: false,
        color: color[0],
        variant: 'outlined',
        css: {
          bg: '$transparent',
          '&:hover': {
            borderColor: 'CurrentColor',
            color: darken(0.04, theme.colors[color[1]].value),
            bg: transparentize(0.85, theme.colors[color[1]].value),
          },
          '&:active': {
            borderColor: 'CurrentColor',
            color: darken(0.09, theme.colors[color[1]].value),
            bg: transparentize(0.78, theme.colors[color[1]].value),
          },
        },
      },
      {
        disabled: true,
        color: color[0],
        variant: 'outlined',
        css: {
          bg: '$transparent',
        },
      },
      {
        disabled: false,
        color: color[0],
        variant: 'ghost',
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
          '&:hover': {
            color: darken(0.04, theme.colors[color[1]].value),
            borderColor: transparentize(0.99, theme.colors[color[1]].value),
            bg: transparentize(0.85, theme.colors[color[1]].value),
          },
          '&:active': {
            color: darken(0.09, theme.colors[color[1]].value),
            borderColor: transparentize(0.99, theme.colors[color[1]].value),
            bg: transparentize(0.78, theme.colors[color[1]].value),
          },
        },
      },
      {
        disabled: true,
        color: color[0],
        variant: 'ghost',
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
        },
      }
    );
  });
  return colorVariants;
};

const StyledButton = styled('button', {
  fontWeight: '$semibold',
  boxSizing: 'border-box',
  borderRadius: '$xs',
  borderWidth: '$normal',
  borderStyle: 'solid',
  cursor: 'pointer',
  outline: 0,
  transition: '$default',
  '&:focus-visible': {
    boxShadow: '$a11y',
  },
  compoundVariants: compoundVariantComposer(),
  variants: {
    color: {
      primary: {
        bg: '$primary',
        color: '$primary',
        borderColor: '$primary',
      },
      secondary: {
        bg: '$secondary',
        color: '$secondary',
        borderColor: '$secondary',
      },
      success: {
        bg: '$lightGreen700',
        color: '$lightGreen700',
        borderColor: '$lightGreen700',
      },
      warning: {
        bg: '$amber700',
        color: '$amber700',
        borderColor: '$amber700',
      },
      error: {
        bg: '$red700',
        color: '$red700',
        borderColor: '$red700',
      },
    },
    size: {
      sm: {
        py: '$2',
        px: '$2',
        fontSize: '$caption',
      },
      md: {
        py: '$2',
        px: '$3',
        fontSize: '$body',
      },
      lg: {
        py: '$3',
        px: '$4',
        fontSize: '$body',
      },
    },
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      false: {
        opacity: 1,
      },
    },
  },
});

export default StyledButton;
