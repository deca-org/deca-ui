import DecaUIProvider, { standardColors } from '../Theme';
import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Checkbox from './Checkbox';

describe('components/Checkbox', () => {
  describe('before click', () => {
    it('border-color', () => {
      cy.mount(<Checkbox label="Label" />);

      cy.get('label')
        .before('border-color')
        .should('eq', Test.color('gray600'));
    });
    it('disabled', () => {
      cy.mount(<Checkbox label="Label" disabled />);

      cy.get('label').should('have.css', 'color', Test.color('gray500'));

      cy.get('label')
        .before('border-color')
        .should('eq', Test.color('gray400'));
    });
  });
  describe('colors', () => {
    it('label color', () => {
      cy.mount(<Checkbox label="Label" />);
      cy.get('label').should('have.css', 'color', Test.color('black'));
    });
    standardColors.map((color) => {
      describe(color, () => {
        it('background-color', () => {
          cy.mount(<Checkbox color={color} label="Label" />);

          cy.get('label').click();

          // wait for css transition to finish
          cy.wait(250);
          cy.get('label')
            .before('background-color')
            .should('eq', Test.color(color));
        });
        it('border-color', () => {
          cy.mount(<Checkbox color={color} label="Label" />);

          cy.get('label').click();

          // wait for css transition to finish
          cy.wait(250);
          cy.get('label')
            .before('border-color')
            .should('eq', Test.color(color));
        });
        it('disabled', () => {
          cy.mount(
            <Checkbox color={color} label="Label" initialCheck disabled />
          );

          cy.get('label').before('opacity').should('eq', '0.55');
          cy.get('svg').should('have.css', 'opacity', '0.9');
        });
      });
    });
  });
  describe('sizes', () => {
    it('sm', () => {
      cy.mount(<Checkbox size="sm" label="Label" />);
      cy.get('label').before('width').should('eq', Test.size('2'));
      cy.get('label').before('height').should('eq', Test.size('2'));
      cy.get('label').before('margin-right').should('eq', Test.space('1'));
      cy.get('label').should('have.css', 'font-size', Test.fontSize('caption'));
      cy.get('svg').should('have.css', 'width', Test.size('1'));
    });
    it('md', () => {
      cy.mount(<Checkbox size="md" label="Label" />);
      cy.get('label').before('width').should('eq', Test.size('3'));
      cy.get('label').before('height').should('eq', Test.size('3'));
      cy.get('label').before('margin-right').should('eq', Test.space('2'));
      cy.get('label').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('svg').should('have.css', 'width', Test.size('2'));
    });
    it('lg', () => {
      cy.mount(<Checkbox size="lg" label="Label" />);
      cy.get('label').before('width').should('eq', Test.size('4'));
      cy.get('label').before('height').should('eq', Test.size('4'));
      cy.get('label').before('margin-right').should('eq', Test.space('2'));
      cy.get('label').should('have.css', 'font-size', Test.fontSize('bodyLg'));
      cy.get('svg').should('have.css', 'width', Test.size('3'));
    });
  });

  describe('no label', () => {
    describe('should have no margin', () => {
      it('sm', () => {
        cy.mount(<Checkbox size="sm" />);
        cy.get('label').before('margin-right').should('eq', '0px');
      });
      it('md', () => {
        cy.mount(<Checkbox size="md" />);
        cy.get('label').before('margin-right').should('eq', '0px');
      });
      it('sm', () => {
        cy.mount(<Checkbox size="md" />);
        cy.get('label').before('margin-right').should('eq', '0px');
      });
    });
  });

  describe('dark mode', () => {
    it('label color', () => {
      cy.darkMount(<Checkbox label="Label" />);
      cy.get('label').should('have.css', 'color', Test.color('white'));
    });

    it('disabled state', () => {
      cy.darkMount(<Checkbox label="Label" initialCheck disabled />);
      cy.get('label').before('opacity').should('eq', '0.5');
      cy.get('svg').should('have.css', 'opacity', '0.3');
    });
  });
});
