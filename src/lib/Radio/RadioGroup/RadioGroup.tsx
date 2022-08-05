import { RadioProps } from '@lib/Radio';
import { CSS, StandardColors } from '@lib/Theme';
import { useDOMRef } from '@lib/Utils';
import clsx from 'clsx';
import React, { useId, useMemo } from 'react';

import { StyledRadioGroupWrapper } from './RadioGroup.styles';

/**
 * RadioGroup is a helpful wrapper used to group Radio button components.
 */
export interface RadioGroupProps {
  /**
   * The content of the component.
   */
  children?:
    | Array<React.ReactElement<RadioProps>>
    | React.ReactElement<RadioProps>;
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
   * Changes which tag component outputs.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Override default CSS style.
   */
  css?: CSS;
}

const RadioGroup = React.forwardRef(
  (
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
    }: RadioGroupProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const radioGroupRef = useDOMRef(ref);

    const presetId = useId();

    const getName = useMemo(() => {
      if (name) {
        return name;
      }
      return presetId;
    }, [name]);

    const preClass = 'decaRadioGroup';

    return (
      <StyledRadioGroupWrapper
        ref={radioGroupRef}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {React.Children.map(
          children as React.ReactElement<RadioProps>,
          (child: React.ReactElement<RadioProps>) => {
            return React.cloneElement(child, {
              name: getName,
              onChange,
              initialSelect: child.props.value === defaultValue,
              selected: value ? child.props.value === value : undefined,
              disabled: disabled ? disabled : child.props.disabled,
              color,
              size,
            });
          }
        )}
      </StyledRadioGroupWrapper>
    );
  }
);

export default RadioGroup;
