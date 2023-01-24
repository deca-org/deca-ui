import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { RadioProps } from '../Radio';
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
  uuid,
  __DEV__,
} from '@lib/Utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import { StyledRadioGroupWrapper } from './RadioGroup.styles';

/**
 * RadioGroup is a helpful wrapper used to group Radio button components.
 */
interface Props {
  /**
   * The content of the component.
   */
  children?:
    | Array<React.ReactElement<RadioProps<React.ElementType>>>
    | React.ReactElement<RadioProps<React.ElementType>>;
  /**
   * The default value. Used when component is not controlled.
   */
  defaultValue?: string;
  /**
   * ClassName applied to the component.
   * @default ''
   */
  className?: string;
  /**
   * The name used to reference the value of the control. If you do not provide this prop, it falls back to a randomly generated name.
   */
  name?: string;
  /**
   * Callback fired when a radio button is selected.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Value of the selected radio button.
   */
  value?: string;
  /**
   * Apply disabled state to all radio buttons in the radio group component
   * @default false
   */
  disabled?: boolean;
  /**
   * Color of radio buttons when active.
   */
  color?: StandardColors;
  /**
   * Size of each radio button.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Override default CSS style.
   */
  css?: CSS;
}

export type RadioGroupProps<T extends React.ElementType> =
  PolymorphicComponentPropWithRef<T, Props>;

export type RadioGroupComponent = (<C extends React.ElementType = 'div'>(
  props: RadioGroupProps<C>
) => React.ReactElement | null) & { displayName?: string };

const RadioGroup: RadioGroupComponent = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      children,
      defaultValue,
      className = '',
      name,
      onChange,
      value,
      disabled = false,
      color,
      size,
      as,
      css,
      ...props
    }: RadioGroupProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const presetId = uuid('radio');

    const getName = useMemo(() => {
      if (name) {
        return name;
      }
      return presetId;
    }, [name]);

    const preClass = 'decaRadioGroup';

    return (
      <StyledRadioGroupWrapper
        ref={ref}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {React.Children.map(
          children as React.ReactElement<RadioProps<React.ElementType>>,
          (child: React.ReactElement<RadioProps<React.ElementType>>) => {
            return React.cloneElement(child, {
              name: getName,
              onChange,
              initialSelect: child.props.value === defaultValue,
              selected: value ? child.props.value === value : undefined,
              disabled: disabled ? disabled : child.props.disabled,
              color,
              size,
              ...child.props,
            });
          }
        )}
      </StyledRadioGroupWrapper>
    );
  }
);

if (__DEV__) {
  RadioGroup.displayName = 'DecaUI.RadioGroup';
}

export default RadioGroup;
