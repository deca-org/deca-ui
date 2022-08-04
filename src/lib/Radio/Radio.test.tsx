import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Radio from './Radio';

describe('components/Radio', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Radio label="Label Text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all colors', () => {
    const { asFragment } = render(
      <>
        <Radio color="primary" />
        <Radio color="secondary" />
        <Radio color="success" />
        <Radio color="warning" />
        <Radio color="error" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Radio size="sm" />
        <Radio size="md" />
        <Radio size="lg" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
