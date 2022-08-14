import { CheckboxProps } from '@lib/Checkbox';
import { CSS, StandardColors } from '@lib/Theme/stitches.config';
import { useDOMRef, uuid } from '@lib/Utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import { StyledCheckboxGroupWrapper } from './CheckboxGroup.styles';

/**
 * CheckboxGroup is a helpful wrapper used to group checkbox components.
 */
export interface CheckboxGroupProps {
  /**
   * The content of the component.
   */
  children?:
    | Array<React.ReactElement<CheckboxProps>>
    | React.ReactElement<CheckboxProps>;
  /**
   * Array of checkboxes that are selected by default. Used when component is not controlled.
   */
  defaultValue?: Array<string>;
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
   * Callback fired when a checkbox is selected.
   */
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Array of selected checkboxes. Used when component is controlled.
   */
  value?: Array<string>;
  /**
   * Apply disabled state to all checkboxes in the checkbox group component
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
   * Color of checkboxes when active.
   */
  color?: StandardColors;
  /**
   * Size of each checkbox.
   */
  size?: 'sm' | 'md' | 'lg';
}

const CheckboxGroup = React.forwardRef(
  (
    {
      children,
      defaultValue,
      className = '',
      name,
      onChange,
      value,
      disabled = false,
      as,
      css,
      color,
      size,
      ...props
    }: CheckboxGroupProps,
    ref: React.Ref<HTMLDivElement | null>
  ) => {
    const checkboxGroupRef = useDOMRef(ref);

    const presetId = uuid('checkbox');

    const getName = useMemo(() => {
      if (name) {
        return name;
      }
      return presetId;
    }, [name]);

    const preClass = 'decaCheckboxGroup';

    return (
      <StyledCheckboxGroupWrapper
        ref={checkboxGroupRef}
        className={clsx(className, `${preClass}-root`)}
        as={as}
        css={css}
        {...props}
      >
        {React.Children.map(
          children as React.ReactElement<CheckboxProps>,
          (child: React.ReactElement<CheckboxProps>) => {
            return React.cloneElement(child, {
              name: getName,
              onChange,
              initialCheck:
                defaultValue &&
                defaultValue.includes(child.props.value as string),
              checked: value && value.includes(child.props.value as string),
              disabled: disabled ? disabled : child.props.disabled,
              color,
              size,
            });
          }
        )}
      </StyledCheckboxGroupWrapper>
    );
  }
);

export default CheckboxGroup;
