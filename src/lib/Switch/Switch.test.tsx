import { render, act } from '@testing-library/react';
import React from 'react';

import Switch from './Switch';

describe('components/Switch', () => {
  it('matches screenshot', () => {
    const { asFragment } = render(<Switch label="Label Text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('onChange event fires', () => {
    const mockFn = jest.fn();
    const utils = render(<Switch label="Label Text" onChange={mockFn} />);
    const input = utils.getByLabelText('Label Text');
    act(() => {
      input.click();
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should ignore events when disabled', () => {
    const mockFn = jest.fn();
    const utils = render(
      <Switch label="Label Text" onChange={mockFn} disabled />
    );
    const input = utils.getByLabelText('Label Text');
    act(() => {
      input.click();
    });
    expect(mockFn.mock.calls.length).toBe(0);
  });
  it('renders all colors', () => {
    const { asFragment } = render(
      <>
        <Switch color="primary" />
        <Switch color="secondary" />
        <Switch color="success" />
        <Switch color="warning" />
        <Switch color="error" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
