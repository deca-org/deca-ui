import { styled, theme } from '@lib/Theme';
import { darken, readableColor } from 'polished';

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
        color: readableColor(
          darken(0.25, theme.colors.primary.value),
          theme.colors.white.value,
          theme.colors.black.value
        ),
      },
      secondary: {
        bg: '$secondary',
        color: readableColor(
          darken(0.25, theme.colors.secondary.value),
          theme.colors.white.value,
          theme.colors.black.value
        ),
      },
      success: {
        bg: '$success',
        color: readableColor(
          darken(0.25, theme.colors.success.value),
          theme.colors.white.value,
          theme.colors.black.value
        ),
      },
      warning: {
        bg: '$warning',
        color: readableColor(
          darken(0.25, theme.colors.warning.value),
          theme.colors.white.value,
          theme.colors.black.value
        ),
      },
      error: {
        bg: '$error',
        color: readableColor(
          darken(0.25, theme.colors.error.value),
          theme.colors.white.value,
          theme.colors.black.value
        ),
      },
    },
  },
});
