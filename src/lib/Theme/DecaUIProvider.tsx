import { createPalette } from '@lib/Utils';
import React, { useMemo } from 'react';
import { SSRProvider } from 'react-aria';

import { createTheme, globalCss } from './stitches.config';

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
  /**
   * Is the provider being used at the highest level of the React App
   */
  root?: boolean;
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
> = ({ theme, children, noBaseline, root = true }) => {
  const modifiedTheme = useMemo(() => {
    if (theme && theme.colors) {
      return {
        ...theme,
        colors: createPalette(theme.colors as Record<string, string>),
      };
    } else {
      return theme;
    }
  }, [theme]);

  if (!noBaseline) {
    globalBaseline();
  }

  const userTheme = useMemo(() => createTheme(modifiedTheme as Theme), [theme]);

  if (!root) {
    return <div className={theme && userTheme}>{children}</div>;
  }

  return (
    <SSRProvider>
      <div className={theme && userTheme} id="decaUI-provider">
        {children}
      </div>
    </SSRProvider>
  );
};

export default DecaUIProvider;
