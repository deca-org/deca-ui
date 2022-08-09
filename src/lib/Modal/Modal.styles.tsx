import { styled, theme } from '@lib/Theme';
import { animated } from '@react-spring/web';
import { transparentize } from 'polished';

export const StyledModalOverlay = styled(animated.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bg: transparentize(0.4, theme.colors.black.value),
  zIndex: '$10',
});

export const StyledModal = styled(animated.div, {
  position: 'fixed',
  bg: '$white',
  fontFamily: '$normal',
  p: '$3',
  boxShadow: '$default',
  br: '$sm',
  zIndex: '$max',
});
