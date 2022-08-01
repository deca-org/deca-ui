import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Box from './Box';

describe('components/Box', () => {
  it('renders content', () => {
    const { getByText } = render(<Box>Children</Box>);
    expect(getByText('Children')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Box></Box>);
    expect(asFragment()).toMatchSnapshot();
  });
});
