import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Popover, { PopoverProps } from '.';
import Button from '../Button';

const PopoverComposer = (props: PopoverProps) => (
  <Popover {...props}>
    <Popover.Trigger>
      <Button>Open Popover</Button>
    </Popover.Trigger>
    <Popover.Content>This is the content of the popover.</Popover.Content>
  </Popover>
);

describe('components/Popover', () => {
  describe('base', () => {
    it('background-color', () => {
      cy.mount(<PopoverComposer />);
      cy.get('button').click();
      cy.get('.decaPopover-root').should(
        'have.css',
        'background-color',
        Test.color('popperLightBg')
      );
    });
    it('color', () => {
      cy.mount(<PopoverComposer />);
      cy.get('button').click();
      cy.get('.decaPopover-root').should(
        'have.css',
        'color',
        Test.color('black')
      );
    });
  });
  describe('state', () => {
    it('not exist in DOM when not open', () => {
      cy.mount(<PopoverComposer />);
      cy.get('.decaPopover-root').should('not.exist');
    });
    it('exists in DOM when open (button clicked)', () => {
      cy.mount(<PopoverComposer />);
      cy.get('button').click();
      cy.get('.decaPopover-root').should('exist');
    });
  });
  describe('dark mode', () => {
    it('background-color', () => {
      cy.darkMount(<PopoverComposer />);
      cy.get('button').click();
      cy.get('.decaPopover-root').should(
        'have.css',
        'background-color',
        Test.color('popperDarkBg')
      );
    });
    it('color', () => {
      cy.darkMount(<PopoverComposer />);
      cy.get('button').click();
      cy.get('.decaPopover-root').should(
        'have.css',
        'color',
        Test.color('white')
      );
    });
  });
});
