import { styled } from '@lib/Theme';

const StyledText = styled('p', {
  fontFamily: '$normal',
  m: '$n',
  variants: {
    as: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$h4',
      },
      h5: {
        fontSize: '$h5',
        lineHeight: '$h5',
      },
      h6: {
        fontSize: '$h6',
        lineHeight: '$h6',
      },
      p: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      span: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      blockquote: {
        fontSize: '$body',
        lineHeight: '$body',
        ml: '$4',
      },
      b: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      small: {
        fontSize: '$caption',
        lineHeight: '$caption',
      },
      del: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      i: {
        fontSize: '$body',
        lineHeight: '$body',
      },
      em: {
        fontSize: '$body',
        lineHeight: '$body',
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
  },
});

export default StyledText;
