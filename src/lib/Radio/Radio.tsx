import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { Modify, useDOMRef, uuid, __DEV__ } from '@lib/Utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
} from './Radio.styles';
import RadioGroup from './RadioGroup';

/**
 * Radio buttons allow the user to select one option from a set.
 */
export interface RadioProps<T extends React.ElementType>
  extends Modify<
    React.ComponentPropsWithRef<'input'>,
    {
      /**
       * Size of the component.
       * @default md
       */
      size?: 'sm' | 'md' | 'lg';
    }
  > {
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
  as?: T;
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
  <T extends React.ElementType = 'label'>(
    {
      size = 'md',
      label,
      className,
      disabled = false,
      as,
      css,
      color = 'primary',
      value,
      name,
      onChange,
      onFocus,
      initialSelect,
      selected,
      ...props
    }: RadioProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof RadioProps<T>>,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const radioRef = useDOMRef(ref);

    const radioId = useMemo(() => {
      if (props.id) {
        return props.id;
      } else {
        return uuid();
      }
    }, [props.id]);

    const preClass = 'decaRadio';

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange && onChange(e);
    };

    const focusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onFocus && onFocus(e);
    };

    const { dark } = React.useContext(ThemeContext);

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
          isDark={dark}
          {...(initialSelect && { defaultChecked: initialSelect })}
          {...(!initialSelect && { checked: selected })}
          {...props}
        />
        <StyledRadioLabel
          htmlFor={radioId}
          css={css}
          size={size}
          as={as as any} // as prop will not accept T in this case
          color={color}
          isDisabled={disabled}
          hasLabel={label ? true : false}
          isDark={dark}
        >
          <div className={`${preClass}-circle`} />
          {label && label}
        </StyledRadioLabel>
      </StyledRadioWrapper>
    );
  }
);

type RadioComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Group: typeof RadioGroup;
};

if (__DEV__) {
  Radio.displayName = 'DecaUI.Radio';
}

export default Radio as RadioComponent<
  HTMLInputElement,
  RadioProps<React.ElementType>
>;
