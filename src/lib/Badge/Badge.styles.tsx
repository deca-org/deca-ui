import { styled } from '@lib/Theme';

export const StyledBadge = styled('span', {
  transition: '$default',
  fontFamily: '$normal',
  fontWeight: '$bold',
  variants: {
    pill: {
      true: {
        br: '$pill',
      },
      false: {
        br: '$sm',
      },
    },
    size: {
      sm: {
        fontSize: '$caption',
        py: '$1',
        px: '$2',
      },
      md: {
        fontSize: '$body',
        py: '$1',
        paddingRight: 'calc($3 - $1)',
        paddingLeft: 'calc($3 - $1)',
      },
      lg: {
        fontSize: '$bodyLg',
        py: '$1',
        px: '$3',
      },
    },
    color: {
      primary: {
        bg: '$primary',
        color: '$primary-readable',
      },
      secondary: {
        bg: '$secondary',
        color: '$secondary-readable',
      },
      success: {
        bg: '$success',
        color: '$success-readable',
      },
      warning: {
        bg: '$warning',
        color: '$warning-readable',
      },
      error: {
        bg: '$error',
        color: '$error-readable',
      },
    },
  },
});
