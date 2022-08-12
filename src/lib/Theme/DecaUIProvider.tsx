import { getStaticColor } from '@lib/Utils';
import { darken, transparentize, readableColor } from 'polished';
import React, { useMemo } from 'react';
import { SSRProvider } from 'react-aria';

import { createTheme, globalCss } from './Theme';

type ThemeValue = { [token in number | string]: boolean | number | string };

export type Theme<T = Record<string, unknown>> = {
  fonts?: ThemeValue;
  fontSizes?: ThemeValue;
  fontWeights?: ThemeValue;
  lineHeights?: ThemeValue;
  letterSpacings?: ThemeValue;
  space?: ThemeValue;
  radii?: ThemeValue;
  zIndices?: ThemeValue;
  borderWeights?: ThemeValue;
  colors?: ThemeValue;
  shadows?: ThemeValue;
  dropShadows?: ThemeValue;
  transitions?: ThemeValue;
  breakpoints?: ThemeValue;
} & {
  [Scale in keyof T]: {
    [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
      ? T[Scale][Token]
      : boolean | number | string;
  };
};

export interface DecaUIProviderProps {
  /**
   * Custom theme object.
   */
  theme?: Theme;
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /**
   * Do not add CSS baseline.
   */
  noBaseline?: boolean;
}

const globalBaseline = globalCss({
  /* Box sizing rules */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  /* Remove default margin */
  'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
    margin: 0,
  },

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  "ul[role='list'], ol[role='list']": {
    listStyle: 'none',
  },

  /* Set core root defaults */
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  /* Set core body defaults */
  body: {
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
  },

  /* A elements that don't have a class get default styles */
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },

  /* Make images easier to work with */
  'img, picture': {
    maxWidth: '100%',
    display: 'block',
  },

  /* Inherit fonts for inputs and buttons */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },

    '*, *::before, *::after': {
      animationDuration: '0.01ms!important',
      animationIterationCount: '1!important',
      transitionDuration: '0.01ms!important',
      scrollBehavior: 'auto!important',
    },
  },
});

const DecaUIProvider: React.FC<
  React.PropsWithChildren<DecaUIProviderProps>
> = ({ theme, children, noBaseline }) => {
  const modifiedTheme = useMemo(() => {
    if (theme && theme.colors) {
      const modifiedColors: Array<Array<string>> = [];
      Object.entries(theme.colors).map((color) => {
        // variable color
        if ((color[1] as string).charAt(0) === '$') {
          color[1] = getStaticColor((color[1] as string).substring(1));
        }

        modifiedColors.push(color as string[]);
        modifiedColors.push([
          `${color[0]}-darken-1`,
          darken(0.055, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-darken-2`,
          darken(0.09, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-darken-3`,
          darken(0.125, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-darken-4`,
          darken(0.256, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-lighten-1`,
          transparentize(0.78, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-lighten-2`,
          transparentize(0.85, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-lighten-3`,
          transparentize(0.9, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-lighten-4`,
          transparentize(0.99, color[1] as string),
        ]);
        modifiedColors.push([
          `${color[0]}-readable`,
          readableColor(
            darken(0.225, color[1] as string),
            getStaticColor('white'),
            getStaticColor('black')
          ),
        ]);
      });
      return { ...theme, colors: Object.fromEntries(modifiedColors) };
    } else {
      return theme;
    }
  }, [theme]);

  if (!noBaseline) {
    globalBaseline();
  }

  const userTheme = useMemo(() => createTheme(modifiedTheme as Theme), [theme]);

  return (
    <SSRProvider>
      <div className={theme && userTheme} id="decaUI-provider">
        {children}
      </div>
    </SSRProvider>
  );
};

export default DecaUIProvider;
