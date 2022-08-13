import { styled } from '@lib/Theme';
import { getStaticColor } from '@lib/Utils';
import { transparentize } from 'polished';

const colComposer = (breakpoint: string) => {
  const cols = [];
  for (let i = 1; i < 13; i++) {
    cols.push([
      i,
      { [`@${breakpoint}`]: { flexBasis: `calc(${i}/12 * 100%)` } },
    ]);
  }
  return Object.fromEntries(cols);
};

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
  variants: {
    xs: colComposer('xs'),
    sm: colComposer('sm'),
    md: colComposer('md'),
    lg: colComposer('lg'),
  },
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
        m: '-$2',
        [`& > ${StyledGridItem}`]: {
          p: '$2',
        },
      },
      lg: {
        m: '-$3',
        [`& > ${StyledGridItem}`]: {
          p: '$3',
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
        gap: 'calc($2 * 2)',
      },
      lg: {
        gap: 'calc($3 * 2)',
      },
    },
  },
});

export const StyledGridRulerItem = styled('div', {
  bg: transparentize(0.75, getStaticColor('gray300')),
  border: `${transparentize(0.75, getStaticColor('gray600'))} solid 1px`,
});
