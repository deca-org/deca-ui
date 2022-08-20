import { CSS, standardColors, styled } from '@lib/Theme/stitches.config';

const compoundVariantComposer = () => {
  const colorVariants: {
    isDisabled?: boolean;
    color?: string;
    variant?: 'solid' | 'outlined' | 'ghost' | 'flat';
    isDark?: boolean;
    css: CSS;
  }[] = [];

  standardColors.map((color) => {
    colorVariants.push(
      {
        isDisabled: false,
        color: color,
        variant: 'solid',
        css: {
          color: `$${color}-readable`,
          '&:hover': {
            borderColor: `$${color}-darken-1`,
            bg: `$${color}-darken-1`,
          },
          '&:active': {
            borderColor: `$${color}-darken-2`,
            bg: `$${color}-darken-2`,
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'solid',
        css: {
          color: `$${color}-readable`,
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
            color: `$${color}-darken-1`,
            bg: `$${color}-lighten-6`,
          },
          '&:active': {
            borderColor: 'CurrentColor',
            color: `$${color}-darken-2`,
            bg: `$${color}-lighten-5`,
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
        isDark: false,
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
          '&:hover': {
            color: `$${color}-darken-1`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-6`,
          },
          '&:active': {
            color: `$${color}-darken-2`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-5`,
          },
        },
      },
      {
        isDisabled: false,
        color: color,
        variant: 'ghost',
        isDark: true,
        css: {
          bg: '$transparent',
          borderColor: '$transparent',
          '&:hover': {
            color: `$${color}-darken-1`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-5`,
          },
          '&:active': {
            color: `$${color}-darken-2`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-4`,
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
        isDark: false,
        css: {
          color: color,
          bg: `$${color}-lighten-7`,
          borderColor: `$${color}-lighten-8`,
          '&:hover': {
            color: `$${color}-darken-1`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-6`,
          },
          '&:active': {
            color: `$${color}-darken-2`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-5`,
          },
        },
      },
      {
        isDisabled: false,
        color: color,
        variant: 'flat',
        isDark: true,
        css: {
          color: color,
          bg: `$${color}-lighten-5`,
          borderColor: `$${color}-lighten-8`,
          '&:hover': {
            color: `$${color}-darken-1`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-4`,
          },
          '&:active': {
            color: `$${color}-darken-1`,
            borderColor: `$${color}-lighten-8`,
            bg: `$${color}-lighten-3`,
          },
        },
      },
      {
        isDisabled: true,
        color: color,
        variant: 'flat',
        css: {
          bg: `$${color}-lighten-7`,
          borderColor: `$${color}-lighten-8`,
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
    isDark: {
      true: {},
      false: {},
    },
  },
});

export default StyledButton;
