import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Badge from './Badge';
import { standardColors } from '../Theme';

describe('components/badge', () => {
  const selector = '[data-testid="test.badge"]';
  it('pill', () => {
    cy.mount(
      <Badge pill data-testid="test.badge">
        Label
      </Badge>
    );
    cy.get(selector).should(
      'have.css',
      'border-radius',
      Test.borderRadius('pill')
    );
  });
  describe('sizes', () => {
    it('sm', () => {
      cy.mount(
        <Badge size="sm" data-testid="test.badge">
          Label
        </Badge>
      );
      cy.get(selector).should('have.css', 'fontSize', Test.fontSize('caption'));
      cy.get(selector).should('have.css', 'paddingTop', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingBottom', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingLeft', Test.space('2'));
      cy.get(selector).should('have.css', 'paddingRight', Test.space('2'));
    });
    it('md', () => {
      cy.mount(
        <Badge size="md" data-testid="test.badge">
          Label
        </Badge>
      );
      cy.get(selector).should('have.css', 'fontSize', Test.fontSize('body'));
      cy.get(selector).should('have.css', 'paddingTop', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingBottom', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingLeft', Test.space('3 - 1'));
      cy.get(selector).should('have.css', 'paddingRight', Test.space('3 - 1'));
    });
    it('lg', () => {
      cy.mount(
        <Badge size="lg" data-testid="test.badge">
          Label
        </Badge>
      );
      cy.get(selector).should('have.css', 'fontSize', Test.fontSize('bodyLg'));
      cy.get(selector).should('have.css', 'paddingTop', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingBottom', Test.space('1'));
      cy.get(selector).should('have.css', 'paddingLeft', Test.space('3'));
      cy.get(selector).should('have.css', 'paddingRight', Test.space('3'));
    });
  });
  describe('color', () => {
    standardColors.map((color) => {
      it(color, () => {
        cy.mount(
          <Badge color={color} data-testid="test.badge">
            Label
          </Badge>
        );
        cy.get(selector).should(
          'have.css',
          'background-color',
          Test.color(color)
        );
        cy.get(selector).should(
          'have.css',
          'color',
          Test.color(`${color}-readable`)
        );
      });
    });
  });
});
