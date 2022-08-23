import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Switch from './Switch';
import { standardColors } from '../Theme';

describe('components/Switch', () => {
  describe('base', () => {
    describe('colors', () => {
      standardColors.map((color) =>
        it(color, () => {
          cy.mount(<Switch color={color} />);
          cy.get('label')
            .before('background-color')
            .should('eq', Test.color('gray300'));

          cy.get('label').click();

          cy.wait(250);

          cy.get('label')
            .before('background-color')
            .should('eq', Test.color(color));

          cy.get('label')
            .after('background-color')
            .should('eq', Test.color('white'));
        })
      );
    });
    describe('disabled', () => {
      it('unselected', () => {
        cy.mount(<Switch disabled />);
        cy.get('label')
          .before('background-color')
          .should('eq', Test.color('gray200'));

        cy.get('label')
          .after('background-color')
          .should('eq', Test.color('gray400'));
      });
      it('selected', () => {
        cy.mount(<Switch initialToggle disabled />);
        cy.get('label');
        cy.get('label')
          .before('background-color')
          .should('eq', Test.color('gray200'));

        cy.get('label')
          .after('background-color')
          .should('eq', Test.color('gray400'));
      });
    });
  });
  describe('dark mode', () => {
    describe('colors', () => {
      standardColors.map((color) =>
        it(color, () => {
          cy.darkMount(<Switch color={color} />);
          cy.get('label')
            .before('background-color')
            .should('eq', Test.color('gray800'));

          cy.get('label').click();

          cy.wait(250);

          cy.get('label')
            .before('background-color')
            .should('eq', Test.color(color));

          cy.get('label')
            .after('background-color')
            .should('eq', Test.color('black'));
        })
      );
    });
    describe('disabled', () => {
      it('unselected', () => {
        cy.darkMount(<Switch disabled />);
        cy.get('label')
          .before('background-color')
          .should('eq', Test.color('gray700'));

        cy.get('label')
          .after('background-color')
          .should('eq', Test.color('gray600'));

        cy.get('label').after('opacity').should('eq', '0.4');
      });
      it('selected', () => {
        cy.darkMount(<Switch initialToggle disabled />);
        cy.get('label')
          .before('background-color')
          .should('eq', Test.color('gray700'));

        cy.get('label')
          .after('background-color')
          .should('eq', Test.color('gray600'));

        cy.get('label').after('opacity').should('eq', '0.4');
      });
    });
  });
});
