import { cssVar } from 'polished';

export const getColor = (varColor: string): string => {
  return cssVar(`--colors-${varColor}`) as string;
};
