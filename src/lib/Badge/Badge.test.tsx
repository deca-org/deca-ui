import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Badge from './Badge';

describe('components/Badge', () => {
  it('renders content', () => {
    const { getByText } = render(<Badge>Label</Badge>);
    expect(getByText('Label')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Badge />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all colors', () => {
    const { asFragment } = render(
      <>
        <Badge color="primary" />
        <Badge color="secondary" />
        <Badge color="success" />
        <Badge color="warning" />
        <Badge color="error" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Badge size="sm" />
        <Badge size="md" />
        <Badge size="lg" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders pill option', () => {
    const { asFragment } = render(<Badge pill />);
    expect(asFragment()).toMatchSnapshot();
  });
});
