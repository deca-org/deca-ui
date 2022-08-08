import { styled } from '@lib/Theme';
import { animated } from '@react-spring/web';

export const StyledPopoverOverlay = styled(animated.div, {
  fontFamily: '$normal',
  p: '$3',
  boxShadow: '$default',
  br: '$sm',
});
