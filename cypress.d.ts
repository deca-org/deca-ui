/// <reference types="cypress" />
import { mount } from 'cypress/react';
import '@testing-library/cypress/add-commands';

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
