import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Box from './Box';

describe('components/box', () => {
  const selector = '[data-testid="test.box"]';
  it('fontFamily', () => {
    cy.mount(<Box data-testid="test.box">Text</Box>);
    cy.get(selector).should('have.css', 'font-family', Test.font('normal'));
  });
});
