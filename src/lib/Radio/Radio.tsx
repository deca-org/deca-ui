import { ThemeContext } from '@lib/Theme';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import {
  Modify,
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  uuid,
  __DEV__,
  MasterComponent,
} from '@lib/Utils';
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
interface Props
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

export type RadioProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type RadioComponent = (<C extends React.ElementType = 'input'>(
  props: RadioProps<C>
) => React.ReactElement | null) & { displayName?: string };

const Radio: RadioComponent = React.forwardRef(
  <T extends React.ElementType = 'input'>(
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
    }: RadioProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
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
          ref={ref}
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

if (__DEV__) {
  Radio.displayName = 'DecaUI.Radio';
}

export default Radio as MasterComponent<
  HTMLInputElement,
  RadioProps<React.ElementType>,
  {
    Group: typeof RadioGroup;
  }
>;
