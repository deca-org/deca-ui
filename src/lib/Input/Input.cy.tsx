import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Input from './Input';
import { standardColors } from '../Theme';

describe('components/Input', () => {
  it('input control', () => {
    cy.mount(
      <Input
        variant="solid"
        placeholder="Example"
        label="Label"
        helperText="Helper text"
      />
    );
    cy.get('input').type('Hello, World');
    cy.get('input').should('have.value', 'Hello, World');
  });
  describe('solid variant', () => {
    it('background-color', () => {
      cy.mount(
        <Input
          variant="solid"
          placeholder="Example"
          label="Label"
          helperText="Helper text"
        />
      );
      cy.get('.decaInput-wrap').should(
        'have.css',
        'background-color',
        Test.color('gray200')
      );
      cy.get('input').click();
      cy.get('.decaInput-wrap').should(
        'have.css',
        'background-color',
        Test.color('gray300')
      );
    });
    it('disabled state', () => {
      cy.mount(
        <Input
          disabled
          variant="solid"
          placeholder="Example"
          label="Label"
          helperText="Helper text"
        />
      );
      cy.get('.decaInput-label').should(
        'have.css',
        'color',
        Test.color('gray500')
      );

      cy.get('.decaInput-wrap').should(
        'have.css',
        'background-color',
        Test.color('gray200')
      );

      cy.get('.decaInput-wrap').should('have.css', 'cursor', 'not-allowed');

      cy.get('.decaInput-helperText').should(
        'have.css',
        'color',
        Test.color('gray500')
      );
    });
  });
  describe('outlined variant', () => {
    it('transparent background-color', () => {
      cy.mount(
        <Input
          variant="outlined"
          placeholder="Example"
          label="Label"
          helperText="Helper text"
        />
      );
      cy.get('input').click();
      cy.get('.decaInput-wrap').should(
        'have.css',
        'background-color',
        'rgba(0, 0, 0, 0)'
      );
    });
    describe('focus color', () => {
      standardColors.map((color) => {
        it(color, () => {
          cy.mount(
            <Input
              variant="outlined"
              focusColor={color}
              placeholder="Example"
              label="Label"
              helperText="Helper text"
            />
          );
          cy.get('.decaInput-wrap').should(
            'have.css',
            'color',
            Test.color('black')
          );
          cy.get('input').click();
          cy.get('.decaInput-wrap').should(
            'have.css',
            'border-color',
            Test.color(color)
          );
          cy.get('.decaInput-label').should(
            'have.css',
            'color',
            Test.color(color)
          );
        });
      });
    });
    it('disabled state', () => {
      cy.mount(
        <Input
          disabled
          variant="outlined"
          placeholder="Example"
          label="Label"
          helperText="Helper text"
        />
      );
      cy.get('.decaInput-label').should(
        'have.css',
        'color',
        Test.color('gray500')
      );

      cy.get('.decaInput-wrap').should(
        'have.css',
        'border-color',
        Test.color('gray400')
      );

      cy.get('.decaInput-wrap').should('have.css', 'cursor', 'not-allowed');

      cy.get('.decaInput-helperText').should(
        'have.css',
        'color',
        Test.color('gray500')
      );
    });
  });
  describe('dark mode', () => {
    it('label & helperText color', () => {
      cy.darkMount(
        <Input placeholder="Example" label="Label" helperText="Helper text" />
      );
      cy.get('.decaInput-label').should(
        'have.css',
        'color',
        Test.color('white')
      );

      cy.get('.decaInput-helperText').should(
        'have.css',
        'color',
        Test.color('white')
      );
    });
    describe('solid variant', () => {
      it('background-color', () => {
        cy.darkMount(
          <Input
            variant="solid"
            placeholder="Example"
            label="Label"
            helperText="Helper text"
          />
        );
        cy.get('.decaInput-wrap').should(
          'have.css',
          'background-color',
          Test.color('gray900')
        );
        cy.get('input').click();
        cy.get('.decaInput-wrap').should(
          'have.css',
          'background-color',
          Test.color('gray800')
        );
      });
      it('disabled state', () => {
        cy.darkMount(
          <Input
            disabled
            variant="solid"
            placeholder="Example"
            label="Label"
            helperText="Helper text"
          />
        );

        cy.get('.decaInput-label').should(
          'have.css',
          'color',
          Test.color('gray700')
        );

        cy.get('.decaInput-wrap').should(
          'have.css',
          'background-color',
          Test.color('gray900')
        );

        cy.get('.decaInput-wrap').should('have.css', 'cursor', 'not-allowed');

        cy.get('.decaInput-helperText').should(
          'have.css',
          'color',
          Test.color('gray700')
        );
      });
    });
    describe('outlined variant', () => {
      it('disabled state', () => {
        cy.darkMount(
          <Input
            disabled
            variant="outlined"
            placeholder="Example"
            label="Label"
            helperText="Helper text"
          />
        );
        cy.get('.decaInput-label').should(
          'have.css',
          'color',
          Test.color('gray700')
        );

        cy.get('.decaInput-wrap').should(
          'have.css',
          'border-color',
          Test.color('gray800')
        );

        cy.get('.decaInput-wrap').should('have.css', 'cursor', 'not-allowed');

        cy.get('.decaInput-helperText').should(
          'have.css',
          'color',
          Test.color('gray700')
        );
      });
    });
  });
});
