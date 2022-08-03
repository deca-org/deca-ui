import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Checkbox from './Checkbox';

describe('components/Checkbox', () => {
  it('matches screenshot', () => {
    const { asFragment } = render(<Checkbox label="Label Text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('onChange event fires', () => {
    const mockFn = jest.fn();
    const utils = render(<Checkbox label="Label Text" onChange={mockFn} />);
    const input = utils.getByLabelText('Label Text');
    act(() => {
      input.click();
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });
  it('should ignore events when disabled', () => {
    const mockFn = jest.fn();
    const utils = render(
      <Checkbox label="Label Text" onChange={mockFn} disabled />
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
        <Checkbox color="primary" />
        <Checkbox color="secondary" />
        <Checkbox color="success" />
        <Checkbox color="warning" />
        <Checkbox color="error" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Checkbox size="sm" />
        <Checkbox size="md" />
        <Checkbox size="lg" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
