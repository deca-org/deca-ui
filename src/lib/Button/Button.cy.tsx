import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import DecaUIProvider from '../Theme';
import Button from './Button';

interface CSSTestComposerProps {
  component: React.ReactElement;
  bg: string;
  borderColor: string;
  color: string;
  disabledComponent?: React.ReactNode;
}

const CSSTestComposer = ({
  component,
  bg,
  borderColor,
  color,
  disabledComponent,
}: CSSTestComposerProps) => {
  it('base', () => {
    cy.mount(component);
    cy.get('button').should('have.css', 'cursor', 'pointer');
  });
  it('background-color', () => {
    cy.mount(component);
    cy.get('button').should('have.css', 'background-color', Test.color(bg));
  });
  it('border-color', () => {
    cy.mount(component);
    cy.get('button').should(
      'have.css',
      'border-color',
      Test.color(borderColor)
    );
  });
  it('text color', () => {
    cy.mount(component);
    cy.get('button').should('have.css', 'color', Test.color(color));
  });
  it('disabled state', () => {
    cy.mount(
      disabledComponent
        ? disabledComponent
        : React.cloneElement(component, { disabled: true })
    );
    cy.get('button').should('have.css', 'opacity', '0.5');
    cy.get('button').should('have.css', 'cursor', 'not-allowed');
  });
};

const allColors = ['primary', 'secondary', 'success', 'warning', 'error'];
describe('components/button', () => {
  describe('sizes', () => {
    it('sm', () => {
      cy.mount(<Button size="sm">Label</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('2'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('2'));
      cy.get('button').should('have.css', 'height', Test.size('6'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('caption'));
    });
    it('md', () => {
      cy.mount(<Button size="md">Label</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('3'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('3'));
      cy.get('button').should('have.css', 'height', Test.size('9'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('body'));
    });
    it('lg', () => {
      cy.mount(<Button size="lg">Label</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('4'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('4'));
      cy.get('button').should('have.css', 'height', Test.size('10'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('bodyLg'));
    });
  });
  describe('variants', () => {
    describe('solid variant', () => {
      allColors.map((color) => {
        describe(color, () => {
          CSSTestComposer({
            component: (
              <Button variant="solid" color={color}>
                Button
              </Button>
            ),
            bg: color,
            borderColor: color,
            color: `${color}-readable`,
          });
        });
      });
    });
    describe('outlined variant', () => {
      allColors.map((color) => {
        describe(color, () => {
          CSSTestComposer({
            component: (
              <Button variant="outlined" color={color}>
                Button
              </Button>
            ),
            bg: 'transparent',
            borderColor: color,
            color: color,
          });
        });
      });
    });
    describe('ghost variant', () => {
      allColors.map((color) => {
        describe(color, () => {
          CSSTestComposer({
            component: (
              <Button variant="ghost" color={color}>
                Button
              </Button>
            ),
            bg: 'transparent',
            borderColor: 'transparent',
            color: color,
          });
        });
      });
    });
    describe('flat variant', () => {
      allColors.map((color) => {
        describe(color, () => {
          CSSTestComposer({
            component: (
              <Button variant="flat" color={color}>
                Button
              </Button>
            ),
            bg: `${color}-lighten-7`,
            borderColor: `${color}-lighten-8`,
            color: color,
          });
        });
      });
    });
    describe('dark mode', () => {
      describe('flat variant', () => {
        allColors.map((color) => {
          describe(color, () => {
            CSSTestComposer({
              component: (
                <DecaUIProvider mode="dark">
                  <Button variant="flat" color={color}>
                    Button
                  </Button>
                </DecaUIProvider>
              ),
              disabledComponent: (
                <DecaUIProvider mode="dark">
                  <Button variant="flat" color={color} disabled>
                    Button
                  </Button>
                </DecaUIProvider>
              ),
              bg: `${color}-lighten-5`,
              borderColor: `${color}-lighten-8`,
              color: color,
            });
          });
        });
      });
    });
  });
});
