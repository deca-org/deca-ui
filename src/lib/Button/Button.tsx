import React from 'react';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export interface ButtonProps {
  /**
   * The content of the component
   */
  children: React.ReactNode;
  /**
   * function that executes when button is clicked
   */
  onClick?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};
