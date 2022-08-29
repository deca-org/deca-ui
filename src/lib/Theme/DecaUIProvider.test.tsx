import { cssVar } from 'polished';
import { render } from '@testing-library/react';
import React from 'react';
import DecaUIProvider from './DecaUIProvider';

describe('components/DecaUIProvider', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<DecaUIProvider></DecaUIProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('can change cssVars', () => {
    render(
      <DecaUIProvider
        theme={{ colors: { primary: '#FFFFFF' } }}
      ></DecaUIProvider>
    );
    expect(cssVar('--colors-primary', '#FFFFFF'));
  });
  it('text color stays black in light mode', () => {
    render(<DecaUIProvider></DecaUIProvider>);
    expect(cssVar('--colors-text', '#FFFFFF'));
  });
  it('dark mode changes default text color', () => {
    render(<DecaUIProvider mode="dark"></DecaUIProvider>);
    expect(cssVar('--colors-text', '#000000'));
  });
});
