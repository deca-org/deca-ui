import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ArrowCircleRightOutline } from '@styled-icons/evaicons-outline/ArrowCircleRightOutline';

import Button from './Button';

describe('components/Button', () => {
  it('renders content', () => {
    const { getByText } = render(<Button>Label</Button>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('matches screenshot', () => {
    const { asFragment } = render(<Button>Label</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('onClick event fires', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button onClick={mockFn}>Label</Button>);
    fireEvent.click(getByText('Label'));
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('renders all colors', () => {
    const { asFragment } = render(
      <>
        <Button color="primary">Label</Button>
        <Button color="secondary">Label</Button>
        <Button color="success">Label</Button>
        <Button color="warning">Label</Button>
        <Button color="error">Label</Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Button size="sm">Label</Button>
        <Button size="md">Label</Button>
        <Button size="lg">Label</Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all variants', () => {
    const { asFragment } = render(
      <>
        <Button variant="solid">Label</Button>
        <Button variant="outlined">Label</Button>
        <Button variant="ghost">Label</Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should ignore events when disabled', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button disabled onClick={mockFn}>
        Label
      </Button>
    );
    fireEvent.click(getByText('Label'));
    expect(mockFn.mock.calls.length).toBe(0);
  });

  it('renders icon', () => {
    const { container, getByText } = render(
      <Button icon={<ArrowCircleRightOutline />}>Label</Button>
    );
    const iconEl = container.querySelector('svg');
    expect(iconEl).toBeInTheDocument();
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('renders icon on right side', () => {
    const { container, getByText } = render(
      <Button iconRight={<ArrowCircleRightOutline />}>Label</Button>
    );
    const iconEl = container.querySelector('svg');
    expect(iconEl).toBeInTheDocument();
    expect(getByText('Label')).toBeInTheDocument();
  });
});
