import { CSS, StandardColors } from '@lib/Theme';
import { useDOMRef } from '@lib/Utils';
import { Check } from '@styled-icons/fa-solid/Check';
import clsx from 'clsx';
import React, { useId } from 'react';

import {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
} from './Radio.styles';

/**
 * Radio buttons allow the user to select one option from a set
 */
export interface RadioProps {
  /**
   * Size of the component.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Text label for the component.
   */
  label?: string;
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
  /**
   * Disabled state applied to the component.
   * @default false
   */
  disabled?: boolean;
  /**
   * Changes which tag component outputs.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Override default CSS style.
   */
  css?: CSS;
  /**
   * Color of radio button when active.
   * @default primary
   */
  color?: StandardColors;
}

const Radio = React.forwardRef(
  (
    {
      size = 'md',
      label,
      className,
      disabled = false,
      as = 'label',
      css,
      color = 'primary',
    }: RadioProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const radioRef = useDOMRef(ref);

    const radioId = useId();

    const preClass = 'decaRadio';

    return (
      <StyledRadioWrapper className={clsx(className, `${preClass}-root`)}>
        <StyledRadio
          id={radioId}
          type="radio"
          ref={radioRef}
          className={`${preClass}-input`}
          size={size}
          color={color}
          disabled={disabled}
        />
        <StyledRadioLabel
          htmlFor={radioId}
          css={css}
          size={size}
          as={as}
          color={color}
          disabled={disabled}
        >
          <div className={`${preClass}-circle`} />
          {label && label}
        </StyledRadioLabel>
      </StyledRadioWrapper>
    );
  }
);

export default Radio;
