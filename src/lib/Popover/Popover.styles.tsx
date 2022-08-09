import { styled } from '@lib/Theme';
import { animated } from '@react-spring/web';

export const StyledPopover = styled(animated.div, {
  bg: '$white',
  fontFamily: '$normal',
  p: '$3',
  boxShadow: '$default',
  br: '$sm',
});
