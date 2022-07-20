import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { rem } from 'polished';

const baseTheme = {
  theme: {
    colors: {
      primary: '#5C7CFA',
      secondary: '#F9A825',
      black: '#000000',
      white: '#FFFFFF',
      transparent: '#FFFFFF00',
      brown900: '#3E2723',
      brown800: '#4E342E',
      brown700: '#5D4037',
      brown600: '#6D4C41',
      brown500: '#795548',
      brown400: '#8D6E63',
      brown300: '#A1887F',
      brown200: '#BCAAA4',
      brown100: '#D7CCC8',
      brown50: '#EFEBE9',
      blueGray900: '#263238',
      blueGray800: '#37474F',
      blueGray700: '#455A64',
      blueGray600: '#546E7A',
      blueGray500: '#607D8B',
      blueGray400: '#78909C',
      blueGray300: '#90A4AE',
      blueGray200: '#B0BEC5',
      blueGray100: '#CFD8DC',
      blueGray50: '#ECEFF1',
      gray900: '#212529',
      gray800: '#343A40',
      gray700: '#495057',
      gray600: '#868E96',
      gray500: '#ADB5BD',
      gray400: '#CED4DA',
      gray300: '#DEE2E6',
      gray200: '#E9ECEF',
      gray100: '#F1F3F5',
      gray50: '#F8F9FA',
      deepOrange900: '#BF360C',
      deepOrange800: '#D84315',
      deepOrange700: '#E64A19',
      deepOrange600: '#F4511E',
      deepOrange500: '#FF5722',
      deepOrange400: '#FF7043',
      deepOrange300: '#FF8A65',
      deepOrange200: '#FFAB91',
      deepOrange100: '#FFCCBC',
      deepOrange50: '#FBE9E7',
      orange900: '#D9480F',
      orange800: '#E8590C',
      orange700: '#F76707',
      orange600: '#FD7E14',
      orange500: '#FF922B',
      orange400: '#FFA94D',
      orange300: '#FFC078',
      orange200: '#FFD8A8',
      orange100: '#FFE8CC',
      orange50: '#FFF4E6',
      amber900: '#FF6F00',
      amber800: '#FF8F00',
      amber700: '#FFA000',
      amber600: '#FFB300',
      amber500: '#FFC107',
      amber400: '#FFCA28',
      amber300: '#FFD54F',
      amber200: '#FFE082',
      amber100: '#FFECB3',
      amber50: '#FFF8E1',
      yellow900: '#F57F17',
      yellow800: '#F9A825',
      yellow700: '#FBC02D',
      yellow600: '#FDD835',
      yellow500: '#FFEB3B',
      yellow400: '#FFEE58',
      yellow300: '#FFF176',
      yellow200: '#FFF59D',
      yellow100: '#FFF9C4',
      yellow50: '#FFFDE7',
      lime900: '#5C940D',
      lime800: '#66A80F',
      lime700: '#74B816',
      lime600: '#82C91E',
      lime500: '#94D82D',
      lime400: '#A9E34B',
      lime300: '#C0EB75',
      lime200: '#D8F5A2',
      lime100: '#E9FAC8',
      lime50: '#F4FCE3',
      lightGreen900: '#2B8A3E',
      lightGreen800: '#2F9E44',
      lightGreen700: '#37B24D',
      lightGreen600: '#40C057',
      lightGreen500: '#51CF66',
      lightGreen400: '#69DB7C',
      lightGreen300: '#8CE99A',
      lightGreen200: '#B2F2BB',
      lightGreen100: '#D3F9D8',
      lightGreen50: '#EBFBEE',
      green900: '#1B5E20',
      green800: '#2E7D32',
      green700: '#388E3C',
      green600: '#43A047',
      green500: '#4CAF50',
      green400: '#66BB6A',
      green300: '#81C784',
      green200: '#A5D6A7',
      green100: '#C8E6C9',
      green50: '#E8F5E9',
      teal900: '#087F5B',
      teal800: '#099268',
      teal700: '#0CA678',
      teal600: '#12B886',
      teal500: '#20C997',
      teal400: '#38D9A9',
      teal300: '#63E6BE',
      teal200: '#96F2D7',
      teal100: '#C3FAE8',
      teal50: '#E6FCF5',
      cyan900: '#0B7285',
      cyan800: '#0C8599',
      cyan700: '#1098AD',
      cyan600: '#15AABF',
      cyan500: '#22B8CF',
      cyan400: '#3BC9DB',
      cyan300: '#66D9E8',
      cyan200: '#99E9F2',
      cyan100: '#C5F6FA',
      cyan50: '#E3FAFC',
      blue900: '#1864AB',
      blue800: '#1971C2',
      blue700: '#1C7ED6',
      blue600: '#228BE6',
      blue500: '#339AF0',
      blue400: '#4DABF7',
      blue300: '#74C0FC',
      blue200: '#A5D8FF',
      blue100: '#D0EBFF',
      blue50: '#E7F5FF',
      indigo900: '#364FC7',
      indigo800: '#3B5BDB',
      indigo700: '#4263EB',
      indigo600: '#4C6EF5',
      indigo500: '#5C7CFA',
      indigo400: '#748FFC',
      indigo300: '#91A7FF',
      indigo200: '#BAC8FF',
      indigo100: '#DBE4FF',
      indigo50: '#EDF2FF',
      purple900: '#4C1D95',
      purple800: '#5B21B6',
      purple700: '#6D28D9',
      purple600: '#7C3AED',
      purple500: '#8B5CF6',
      purple400: '#A78BFA',
      purple300: '#C4B5FD',
      purple200: '#DDD6FE',
      purple100: '#EDE9FE',
      purple50: '#F5F3FF',
      violet900: '#5F3DC4',
      violet800: '#6741D9',
      violet700: '#7048E8',
      violet600: '#7950F2',
      violet500: '#845EF7',
      violet400: '#9775FA',
      violet300: '#B197FC',
      violet200: '#D0BFFF',
      violet100: '#E5DBFF',
      violet50: '#F3F0FF',
      grape900: '#862E9C',
      grape800: '#9C36B5',
      grape700: '#AE3EC9',
      grape600: '#BE4BDB',
      grape500: '#CC5DE8',
      grape400: '#DA77F2',
      grape300: '#E599F7',
      grape200: '#EEBEFA',
      grape100: '#F3D9FA',
      grape50: '#F8F0FC',
      pink900: '#A61E4D',
      pink800: '#C2255C',
      pink700: '#D6336C',
      pink600: '#E64980',
      pink500: '#F06595',
      pink400: '#F783AC',
      pink300: '#FAA2C1',
      pink200: '#FCC2D7',
      pink100: '#FFDEEB',
      pink50: '#FFF0F6',
      red900: '#C92A2A',
      red800: '#E03131',
      red700: '#F03E3E',
      red600: '#FA5252',
      red500: '#FF6B6B',
      red400: '#FF8787',
      red300: '#FFA8A8',
      red200: '#FFC9C9',
      red100: '#FFE3E3',
      red50: '#FFF5F5',
    },
    space: {
      0: rem(2),
      1: rem(4),
      2: rem(8),
      3: rem(16),
      4: rem(32),
      5: rem(64),
      6: rem(128),
    },
    fontSizes: {
      h1: rem(48),
      h2: rem(40),
      h3: rem(32),
      h4: rem(28),
      h5: rem(23),
      h6: rem(19),
      body: rem(16),
      caption: rem(13),
      footnote: rem(11),
    },
    fonts: {
      normal:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      base: 1.5,
      md: 1.5,
      lg: 1.75,
      xl: 1.75,
      xl2: 2,
      xl3: 2.25,
      xl4: 2.5,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    borderWidths: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    radii: {
      xs: '5px',
      sm: '7px',
      md: '12px',
      base: '14px',
      lg: '14px',
      xl: '18px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    shadows: {
      a11y: '0 0 0 3px rgba(66,153,225,0.6)',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999',
    },
    transitions: {
      default: 'all 250ms ease',
    },
    media: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // color
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<'width' | 'height'>) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    // property for flexbox
    dflex: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      display: 'flex',
      justifyContent: value,
      alignItems: value,
    }),
  },
};

const stitches = createStitches(baseTheme);

export const createThemeBase = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const theme = stitches.theme;
export const config = stitches.config;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;
export type StandardColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

export type AllColors = keyof typeof theme.colors;

export type StandardColorValues =
  | 'primary'
  | 'secondary'
  | 'lightGreen700'
  | 'amber700'
  | 'red700';

export const standardColors: Record<StandardColors, AllColors> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'lightGreen700',
  warning: 'amber700',
  error: 'red700',
};
