/// <reference types="Cypress" />
import React from 'react';
import Button from './Button';

describe('e2e/button', () => {
  it('works', () => {
    cy.mount(<Button />);
  });
});
