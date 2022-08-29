import React from 'react';
import DecaUIProvider from '@lib/Theme';
import { uuid } from './random';
import { createPalette } from './color';
import { render } from '@testing-library/react';
import { __DEV__ } from './env';

describe('utils/color', () => {
  it('generatePalette', () => {
    expect(createPalette({ primary: '#228BE6' })).toStrictEqual({
      primary: '#228BE6',
      'primary-darken-1': '#187dd4',
      'primary-darken-2': '#1673c4',
      'primary-darken-3': '#146ab4',
      'primary-darken-4': '#0e4778',
      'primary-lighten-1': 'rgba(34,139,230,0.85)',
      'primary-lighten-2': 'rgba(34,139,230,0.75)',
      'primary-lighten-3': 'rgba(34,139,230,0.5)',
      'primary-lighten-4': 'rgba(34,139,230,0.35)',
      'primary-lighten-5': 'rgba(34,139,230,0.22)',
      'primary-lighten-6': 'rgba(34,139,230,0.15)',
      'primary-lighten-7': 'rgba(34,139,230,0.1)',
      'primary-lighten-8': 'rgba(34,139,230,0.01)',
      'primary-readable': '#fff',
    });
  });
});
describe('utils/random', () => {
  it('can use prefix', () => {
    expect(uuid('prefix')).toContain('prefix-');
  });
});
describe('utils/env', () => {
  it('returns true if process.NODE_ENV is development', () => {
    expect(__DEV__).toBe(process.env.NODE_ENV === 'development');
  });
});
