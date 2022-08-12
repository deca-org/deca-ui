import { theme } from '@lib/Theme';

export const getStaticColor = (varColor: string): string => {
  return theme.colors[varColor as keyof typeof theme.colors].value;
};
