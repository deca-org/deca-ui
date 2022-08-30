import { styled } from '@lib/Theme/stitches.config';

const StyledText = styled('p', {
  m: '$n',
  variants: {
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
    size: {
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
      body: {
        fontSize: '$body',
        lineHeight: '$1',
      },
      bodySm: {
        fontSize: '$bodySm',
        lineHeight: '$1',
      },
      caption: {
        fontSize: '$caption',
        lineHeight: '$1',
      },
      footnote: {
        fontSize: '$footnote',
        lineHeight: '$0',
      },
    },
    lineHeight: {
      n: {
        lineHeight: '$n',
      },
      0: {
        lineHeight: '$0',
      },
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
      },
      4: {
        lineHeight: '$4',
      },
      5: {
        lineHeight: '$5',
      },
      6: {
        lineHeight: '$6',
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
      false: {},
    },
    isDark: {
      true: {
        color: '$text',
      },
      false: {},
    },
    mono: {
      true: {
        fontFamily: '$mono',
      },
      false: {
        fontFamily: '$normal',
      },
    },
  },
});

export default StyledText;
