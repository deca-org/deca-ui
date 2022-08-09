import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from './Modal';

describe('components/Modal', () => {
  global.ResizeObserver = require('resize-observer-polyfill');
  it('matches snapshot', () => {
    const { asFragment } = render(<Modal open>Hello World</Modal>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders text when modal is open', () => {
    render(<Modal open>content</Modal>);
    expect(screen.queryByText('content')).not.toBe(null);
  });
  it('does not render text when modal is closed', () => {
    render(<Modal>content</Modal>);
    expect(screen.queryByText('content')).toBe(null);
  });
});
