import { theme } from '@lib/Theme/stitches.config';
import { darken, transparentize, readableColor } from 'polished';

export const getStaticColor = (varColor: string): string => {
  return theme.colors[varColor as keyof typeof theme.colors].value;
};

const generatePalette = (color: string[]) => {
  const colors = [];

  colors.push(color as string[]);
  colors.push([`${color[0]}-darken-1`, darken(0.055, color[1] as string)]);
  colors.push([`${color[0]}-darken-2`, darken(0.09, color[1] as string)]);
  colors.push([`${color[0]}-darken-3`, darken(0.125, color[1] as string)]);
  colors.push([`${color[0]}-darken-4`, darken(0.256, color[1] as string)]);
  colors.push([
    `${color[0]}-lighten-1`,
    transparentize(0.15, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-2`,
    transparentize(0.25, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-3`,
    transparentize(0.5, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-4`,
    transparentize(0.65, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-5`,
    transparentize(0.78, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-6`,
    transparentize(0.85, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-7`,
    transparentize(0.9, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-lighten-8`,
    transparentize(0.99, color[1] as string),
  ]);
  colors.push([
    `${color[0]}-readable`,
    readableColor(
      darken(0.225, color[1] as string),
      getStaticColor('white'),
      getStaticColor('black')
    ),
  ]);

  return colors;
};

export const createPalette = (colorObj: Record<string, string>) => {
  const modifiedColors: Array<Array<string>> = [];
  Object.entries(colorObj).map((color) => {
    // variable color
    if ((color[1] as string).charAt(0) === '$') {
      color[1] = getStaticColor((color[1] as string).substring(1));
    }
    modifiedColors.push(...generatePalette(color));
  });
  return Object.fromEntries(modifiedColors);
};

export const hexRgb = (
  hex: string,
  options: Record<string, string | number> = {}
): Record<string, number> => {
  const hexCharacters = 'a-f\\d';
  const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
  const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
  const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
  const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');
  if (
    typeof hex !== 'string' ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  let alphaFromHex = 1;

  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = (number >> 8) & 255;
  const blue = number & 255;
  const alpha =
    typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

  return { red, green, blue, alpha };
};
