import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import { standardColors } from '../Theme';
import Button from './Button';

interface CSSTestComposerProps {
  component: React.ReactElement;
  bg: string;
  borderColor: string;
  color: string;
  darkMode?: boolean;
}

const CSSTestComposer = ({
  component,
  bg,
  borderColor,
  color,
  darkMode = false,
}: CSSTestComposerProps) => {
  const mount = darkMode ? 'darkMount' : 'mount';
  it('base', () => {
    cy[mount](component);
    cy.get('button').should('have.css', 'cursor', 'pointer');
  });
  it('background-color', () => {
    cy[mount](component);
    cy.get('button').should('have.css', 'background-color', Test.color(bg));
  });
  it('border-color', () => {
    cy[mount](component);
    cy.get('button').should(
      'have.css',
      'border-color',
      Test.color(borderColor)
    );
  });
  it('text color', () => {
    cy[mount](component);
    cy.get('button').should('have.css', 'color', Test.color(color));
  });
  it('disabled state', () => {
    cy[mount](React.cloneElement(component, { disabled: true }));
    cy.get('button').should('have.css', 'opacity', '0.5');
    cy.get('button').should('have.css', 'cursor', 'not-allowed');
  });
};

describe('components/Button', () => {
  it('pill', () => {
    cy.mount(<Button pill>Button</Button>);
    cy.get('button').should(
      'have.css',
      'border-radius',
      Test.borderRadius('pill')
    );
  });
  describe('sizes', () => {
    it('sm', () => {
      cy.mount(<Button size="sm">Button</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('2'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('2'));
      cy.get('button').should('have.css', 'height', Test.size('6'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('caption'));
    });
    it('md', () => {
      cy.mount(<Button size="md">Button</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('3'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('3'));
      cy.get('button').should('have.css', 'height', Test.size('9'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('bodySm'));
    });
    it('lg', () => {
      cy.mount(<Button size="lg">Button</Button>);
      cy.get('button').should('have.css', 'paddingLeft', Test.space('4'));
      cy.get('button').should('have.css', 'paddingRight', Test.space('4'));
      cy.get('button').should('have.css', 'height', Test.size('10'));
      cy.get('button').should('have.css', 'fontSize', Test.fontSize('body'));
    });
  });
  describe('variants', () => {
    describe('solid variant', () => {
      standardColors.map((color) => {
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
      standardColors.map((color) => {
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
      standardColors.map((color) => {
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
      standardColors.map((color) => {
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
        standardColors.map((color) => {
          describe(color, () => {
            CSSTestComposer({
              component: (
                <Button variant="flat" color={color}>
                  Button
                </Button>
              ),
              bg: `${color}-lighten-5`,
              borderColor: `${color}-lighten-8`,
              color: color,
              darkMode: true,
            });
          });
        });
      });
    });
  });
});
