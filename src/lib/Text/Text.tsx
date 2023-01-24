import { ThemeContext } from '@lib/Theme';
import { CSS } from '@lib/Theme/stitches.config';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  AnyObject,
  __DEV__,
} from '@lib/Utils';
import React from 'react';

import StyledText from './Text.styles';

export type TextAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'blockquote'
  | 'b'
  | 'small'
  | 'del'
  | 'i'
  | 'em';

export type TextWeight =
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'bodySm'
  | 'caption'
  | 'footnote'
  | AnyObject;

export type TextLineHeight = 'n' | '0' | '1' | '2' | '3' | '4' | '5' | '6';

/**
 * The Text component is the used to render text and paragraphs within an interface
 */
interface Props {
  /**
   * Changes which tag component outputs.
   */
  as?: TextAs;
  /**
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * The content of the component.
   */
  children?: React.ReactNode | undefined;
  /**
   * Font weight of the text.
   */
  weight?: TextWeight;
  /**
   * Custom size for the text.
   */
  size?: TextSize;
  /**
   * Center text.
   */
  center?: boolean;
  /**
   * Custom line height for the text.
   */
  lineHeight?: TextLineHeight;
  /**
   * Should text be mono font-family.
   * @default false;
   */
  mono?: boolean;
}

export type TextProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type TextComponent = (<C extends React.ElementType = 'p'>(
  props: TextProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Text: TextComponent = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      css,
      children,
      weight,
      size,
      lineHeight,
      center,
      mono = false,
      ...textProps
    }: TextProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const preClass = 'decaText';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledText
        as={as}
        css={css}
        className={`${preClass}-root`}
        ref={ref}
        weight={weight}
        center={center}
        size={size}
        isDark={dark}
        lineHeight={lineHeight}
        mono={mono}
        {...textProps}
      >
        {children}
      </StyledText>
    );
  }
);

if (__DEV__) {
  Text.displayName = 'DecaUI.Text';
}

export default Text;
