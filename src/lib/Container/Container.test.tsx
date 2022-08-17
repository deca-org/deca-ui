import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Container from './Container';

describe('components/Container', () => {
  it('renders content', () => {
    const { getByText } = render(<Container>Children</Container>);
    expect(getByText('Children')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Container></Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
