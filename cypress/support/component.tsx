import React from 'react';
import Box from '../../src/lib/Box';
import DecaUIProvider from '../../src/lib/Theme';
import './commands';
import { mount } from 'cypress/react18';
import _cyp from '../../cypress';

Cypress.Commands.add('mount', (component: React.ReactElement, options = {}) => {
  const wrapped = (
    <DecaUIProvider>
      <Box
        css={{
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bg: '$white',
        }}
      >
        <Box css={{ display: 'block' }}>{component}</Box>
      </Box>
    </DecaUIProvider>
  );
  return mount(wrapped, options);
});

Cypress.Commands.add(
  'darkMount',
  (component: React.ReactElement, options = {}) => {
    const wrapped = (
      <DecaUIProvider mode="dark">
        <Box
          css={{
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bg: '$black',
          }}
        >
          <Box css={{ display: 'block' }}>{component}</Box>
        </Box>
      </DecaUIProvider>
    );
    return mount(wrapped, options);
  }
);

Cypress.Commands.add('baseMount', mount);

function unquote(str: string) {
  return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
  'before',
  {
    prevSubject: 'element',
  },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'before'); return unquote(before.getPropertyValue(property));
  }
);

Cypress.Commands.add(
  'after',
  {
    prevSubject: 'element',
  },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'after');
    return unquote(before.getPropertyValue(property));
  }
);
