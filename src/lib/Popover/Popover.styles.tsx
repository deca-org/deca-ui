import { styled } from '@lib/Theme/stitches.config';
import { animated } from '@react-spring/web';

export const StyledPopover = styled(animated.div, {
  fontFamily: '$normal',
  p: '$3',
  boxShadow: '$default',
  br: '$sm',
  color: '$text',
  variants: {
    isDark: {
      true: {
        bg: '$popperDarkBg',
      },
      false: {
        bg: '$popperLightBg',
      },
    },
  },
});
