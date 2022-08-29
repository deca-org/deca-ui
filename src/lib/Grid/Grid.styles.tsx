import { styled } from '@lib/Theme/stitches.config';
import { getStaticColor } from '@lib/Utils';
import { transparentize } from 'polished';

const justifyContentComposer = () => {
  const options = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const variantObj: Array<
    Array<keyof typeof options | Record<'justifyContent', keyof typeof options>>
  > = [];

  options.map((i) => {
    variantObj.push([
      i as keyof typeof options,
      { justifyContent: i } as Record<'justifyContent', keyof typeof options>,
    ]);
  });
  return Object.fromEntries(variantObj);
};

const alignItemsComposer = () => {
  const options = ['flex-start', 'center', 'flex-end'];
  const variantObj: Array<
    Array<keyof typeof options | Record<'alignItems', keyof typeof options>>
  > = [];

  options.map((i) => {
    variantObj.push([
      i as keyof typeof options,
      { alignItems: i } as Record<'alignItems', keyof typeof options>,
    ]);
  });
  return Object.fromEntries(variantObj);
};

export const StyledGridItem = styled('div', {
  display: 'block',
  boxSizing: 'border-box',
});

export const StyledGridContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  overflow: 'hidden',
  variants: {
    justifyContent: justifyContentComposer(),
    alignItems: alignItemsComposer(),
    spacing: {
      none: {
        m: '$n',
        [`& > ${StyledGridItem}`]: {
          p: '$n',
        },
      },
      sm: {
        m: '-$1',
        [`& > ${StyledGridItem}`]: {
          p: '$1',
        },
      },
      md: {
        m: '-$3',
        [`& > ${StyledGridItem}`]: {
          p: '$3',
        },
      },
      lg: {
        m: '-$5',
        [`& > ${StyledGridItem}`]: {
          p: '$5',
        },
      },
    },
  },
});

export const StyledGridRuler = styled('div', {
  position: 'absolute',
  top: 0,
  zIndex: -1,
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  width: '100%',
  height: '100vh',
  variants: {
    spacing: {
      none: {
        gap: '$n',
      },
      sm: {
        gap: 'calc($1 * 2)',
      },
      md: {
        gap: 'calc($3 * 2)',
      },
      lg: {
        gap: 'calc($5 * 2)',
      },
    },
  },
});

export const StyledGridRulerItem = styled('div', {
  bg: transparentize(0.75, getStaticColor('gray300')),
  border: `${transparentize(0.75, getStaticColor('gray600'))} solid 1px`,
});
