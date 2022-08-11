import React, { useEffect } from 'react';
import { SSRProvider } from 'react-aria';

import { createTheme } from './Theme';

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
export interface DecaUIProvider {
  theme?: Theme;
  children?: React.ReactNode | undefined;
}

const DecaUIProvider: React.FC<React.PropsWithChildren<DecaUIProvider>> = ({
  theme,
  children,
}) => {
  const userTheme = createTheme(theme as Theme);

  useEffect(() => {
    document.documentElement.classList.add(userTheme);
  }, []);

  return <SSRProvider>{children}</SSRProvider>;
};

export default DecaUIProvider;
