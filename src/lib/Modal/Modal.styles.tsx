import { styled, theme } from '@lib/Theme/stitches.config';
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
  fontFamily: '$normal',
  boxShadow: '$default',
  br: '$sm',
  zIndex: '$max',
  color: '$text',
  variants: {
    noPadding: {
      true: {
        p: '$n',
      },
      false: {
        p: '$3',
      },
    },
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

export const StyledModalFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  variants: {
    autoGap: {
      true: {
        gap: '$4',
      },
      false: {
        gap: '$n',
      },
    },
  },
});

export const StyledModalHeader = styled('div', {
  color: '$text',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  variants: {
    autoGap: {
      true: {
        gap: '$2',
      },
      false: {
        gap: '$n',
      },
    },
  },
});

export const StyledModalBody = styled('div', {
  color: '$text',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  variants: {
    autoGap: {
      true: {
        gap: '$2',
      },
      false: {
        gap: '$n',
      },
    },
  },
});

export const StyledModalFooter = styled('div', {
  color: '$text',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  variants: {
    autoGap: {
      true: {
        gap: '$2',
      },
      false: {
        gap: '$n',
      },
    },
  },
});
