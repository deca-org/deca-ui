import './commands';
import { mount } from 'cypress/react18';
import _cyp from '../../cypress';

Cypress.Commands.add('mount', mount);

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
    const before = win.getComputedStyle(el[0], 'before');
    return unquote(before.getPropertyValue(property));
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
