import { CSS, standardColors, styled, theme } from '@lib/Theme';
import { darken, readableColor, transparentize } from 'polished';

const compoundVariantComposer = () => {
  const colorVariants: {
    isDisabled?: boolean;
    color?: string;
    variant?: 'solid' | 'outlined' | 'ghost' | 'flat';
    css: CSS;
  }[] = [];

  standardColors.map((color) => {
    colorVariants.push(
      {
        isDisabled: false,
        color: color,
        variant: 'solid',
        css: {
          color: readableColor(
            darken(0.25, theme.colors[color].value),
            theme.colors.white.value,
            theme.colors.black.value
          ),
          '&:hover': {
            borderColor: darken(0.04, theme.colors[color].value),
            bg: darken(0.04, theme.colors[color].value),
          },
          '&:active': {
            borderColor: darken(0.09, theme.colors[color].value),
            bg: darken(0.09, theme.colors[color].value),
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'solid',
        css: {
          color: readableColor(
            darken(0.25, theme.colors[color].value),
            theme.colors.white.value,
            theme.colors.black.value
          ),
        },
      },
      {
        isDisabled: false,
        color: color,
        variant: 'outlined',
        css: {
          bg: '$transparent',
          '&:hover': {
            borderColor: 'CurrentColor',
            color: darken(0.04, theme.colors[color].value),
            bg: transparentize(0.85, theme.colors[color].value),
          },
          '&:active': {
            borderColor: 'CurrentColor',
            color: darken(0.09, theme.colors[color].value),
            bg: transparentize(0.78, theme.colors[color].value),
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'outlined',
        css: {
          bg: '$transparent',
        },
      },
      {
        isDisabled: false,
        color: color,
        variant: 'ghost',
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
          '&:hover': {
            color: darken(0.04, theme.colors[color].value),
            borderColor: transparentize(0.99, theme.colors[color].value),
            bg: transparentize(0.85, theme.colors[color].value),
          },
          '&:active': {
            color: darken(0.09, theme.colors[color].value),
            borderColor: transparentize(0.99, theme.colors[color].value),
            bg: transparentize(0.78, theme.colors[color].value),
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'ghost',
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
        },
      },
      {
        isDisabled: false,
        color: color,
        variant: 'flat',
        css: {
          color: color,
          bg: transparentize(0.9, theme.colors[color].value),
          borderColor: transparentize(1, theme.colors[color].value),
          '&:hover': {
            color: darken(0.04, theme.colors[color].value),
            borderColor: transparentize(0.99, theme.colors[color].value),
            bg: transparentize(0.85, theme.colors[color].value),
          },
          '&:active': {
            color: darken(0.09, theme.colors[color].value),
            borderColor: transparentize(0.99, theme.colors[color].value),
            bg: transparentize(0.78, theme.colors[color].value),
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'flat',
        css: {
          bg: transparentize(0.9, theme.colors[color].value),
          borderColor: transparentize(1, theme.colors[color].value),
        },
      }
    );
  });
  return colorVariants;
};

const StyledButton = styled('button', {
  fontWeight: '$semibold',
  fontFamily: '$normal',
  '-webkit-font-smoothing': 'antialiased',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  borderWidth: '$normal',
  borderStyle: 'solid',
  cursor: 'pointer',
  outline: 0,
  transition: '$default',
  '&:focus-visible': {
    boxShadow: '$a11y',
  },
  compoundVariants: [
    ...compoundVariantComposer(),
    {
      singleIcon: true,
      size: 'sm',
      css: {
        px: '$n',
        size: '$6',
      },
    },
    {
      singleIcon: true,
      size: 'md',
      css: {
        px: '$n',
        size: '$9',
      },
    },
    {
      singleIcon: true,
      size: 'lg',
      css: {
        px: '$n',
        size: '$10',
      },
    },
  ],
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
        bg: '$success',
        color: '$success',
        borderColor: '$success',
      },
      warning: {
        bg: '$warning',
        color: '$warning',
        borderColor: '$warning',
      },
      error: {
        bg: '$error',
        color: '$error',
        borderColor: '$error',
      },
    },
    size: {
      sm: {
        px: '$2',
        fontSize: '$caption',
        height: '$6',
      },
      md: {
        px: '$3',
        fontSize: '$body',
        height: '$9',
      },
      lg: {
        px: '$4',
        fontSize: '$bodyLg',
        height: '$10',
      },
    },
    singleIcon: {
      true: {},
      false: {},
    },
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
      flat: {},
    },
    isDisabled: {
      true: {
        opacity: '50%',
        cursor: 'not-allowed',
      },
      false: {
        opacity: '100%',
      },
    },
    maxWidth: {
      true: {
        width: '100%',
      },
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

export default StyledButton;
