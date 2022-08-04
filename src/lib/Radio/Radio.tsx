import { CSS, StandardColors } from '@lib/Theme';
import { useDOMRef } from '@lib/Utils';
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
  /**
   * The value assigned to the radio button.
   */
  value?: string;
  /**
   * Callback fired when a radio button is selected
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Callback fired when a radio button is focused
   */
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Name is used as an identifier in a form.
   */
  name?: string;
  /**
   *  Whether or not the checkbox is initially checked.
   */
  initialSelect?: boolean;
  /**
   * Whether or not the radio button is selected.
   */
  selected?: boolean;
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
      value,
      name,
      onChange,
      onFocus,
      initialSelect,
      selected,
      ...props
    }: RadioProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const radioRef = useDOMRef(ref);

    const radioId = useId();

    const preClass = 'decaRadio';

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange && onChange(e);
    };

    const focusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onFocus && onFocus(e);
    };

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
          isDisabled={disabled}
          value={value}
          name={name}
          onChange={changeHandler}
          onFocus={focusHandler}
          {...(initialSelect && { defaultChecked: initialSelect })}
          {...(!initialSelect && { checked: selected })}
          {...props}
        />
        <StyledRadioLabel
          htmlFor={radioId}
          css={css}
          size={size}
          as={as}
          color={color}
          isDisabled={disabled}
        >
          <div className={`${preClass}-circle`} />
          {label && label}
        </StyledRadioLabel>
      </StyledRadioWrapper>
    );
  }
);

export default Radio;
