import { styled } from '@lib/Theme/stitches.config';

const StyledText = styled('p', {
  fontFamily: '$normal',
  m: '$n',
  variants: {
    as: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$6',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$5',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$4',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$3',
      },
      h5: {
        fontSize: '$h5',
        lineHeight: '$2',
      },
      h6: {
        fontSize: '$h6',
        lineHeight: '$2',
      },
      p: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      span: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      blockquote: {
        fontSize: '$body',
        lineHeight: '$1',
        ml: '$4',
      },
      b: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      small: {
        fontSize: '$caption',
        lineHeight: '$0',
      },
      del: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      i: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      em: {
        fontSize: '$body',
        lineHeight: '$1',
      },
    },
    weight: {
      hairline: {
        fontWeight: '$hairline',
      },
      thin: {
        fontWeight: '$thin',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
      extrabold: {
        fontWeight: '$extrabold',
      },
      black: {
        fontWeight: '$black',
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
      false: {},
    },
  },
});

export default StyledText;
