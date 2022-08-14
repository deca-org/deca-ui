import { theme } from '@lib/Theme/stitches.config';
import { darken, transparentize, readableColor } from 'polished';

export const getStaticColor = (varColor: string): string => {
  return theme.colors[varColor as keyof typeof theme.colors].value;
};

export const createPalette = (colorObj: Record<string, string>) => {
  const modifiedColors: Array<Array<string>> = [];
  Object.entries(colorObj).map((color) => {
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
  return Object.fromEntries(modifiedColors);
};
