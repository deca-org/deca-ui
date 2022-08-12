import { render, fireEvent, act } from '@testing-library/react';
import React from 'react';

import Input from './Input';

describe('components/Input', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Input
        helperText="Helper Text"
        label="Label Text"
        placeholder="Placeholder Text"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('onFocus event fires', () => {
    const mockFn = jest.fn();
    const utils = render(<Input label="Label Text" onFocus={mockFn} />);
    const input = utils.getByLabelText('Label Text');
    act(() => {
      input.focus();
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('renders all colors', () => {
    const { asFragment } = render(
      <>
        <Input focusColor="primary" />
        <Input focusColor="secondary" />
        <Input focusColor="success" />
        <Input focusColor="warning" />
        <Input focusColor="error" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all variants', () => {
    const { asFragment } = render(
      <>
        <Input variant="solid" />
        <Input variant="outlined" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should ignore events when disabled', () => {
    const mockFn = jest.fn();
    const utils = render(<Input disabled label="Label Text" />);
    const input = utils.getByLabelText('Label Text');
    fireEvent.change(input, { target: { value: 'new-value' } });
    expect(mockFn.mock.calls.length).toBe(0);
  });
});
