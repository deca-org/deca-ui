import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Button from './Button';

describe('components/Button', () => {
  it('renders button', () => {
    const { container, getByText } = render(<Button>Hello, world!</Button>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button>
        Hello, world!
      </button>
    `);
  });
});
