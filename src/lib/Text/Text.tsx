import { ThemeContext } from '@lib/Theme';
import { CSS } from '@lib/Theme/stitches.config';
import { AnyObject, UnionToIntersection, __DEV__ } from '@lib/Utils';
import React, { useRef, useImperativeHandle } from 'react';

import StyledText from './Text.styles';

type TextElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLElement;

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
export interface TextProps extends React.ComponentPropsWithRef<'h1'> {
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

const Text = React.forwardRef(
  (
    {
      as = 'p',
      css,
      children,
      weight,
      size,
      lineHeight,
      center,
      mono = false,
      ...textProps
    }: TextProps,
    ref: React.Ref<TextElement | null>
  ) => {
    const textRef = useRef<UnionToIntersection<TextElement>>(null);

    useImperativeHandle(ref, () => textRef.current);

    const preClass = 'decaText';

    const { dark } = React.useContext(ThemeContext);

    return (
      <StyledText
        as={as}
        css={css}
        className={`${preClass}-root`}
        ref={textRef}
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
