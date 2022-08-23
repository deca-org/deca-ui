/// <reference types="cypress" />
import { mount } from 'cypress/react';
import '@testing-library/cypress/add-commands';

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      baseMount: typeof mount;
      mount: typeof mount;
      darkMount: typeof mount;
      before(value: string): any;
      after(value: string): any;
    }
  }
}
