import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Text, { TextLineHeight, TextWeight } from './Text';

const allWeights = [
  'hairline',
  'thin',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];

const allLineHeights = ['n', '0', '1', '2', '3', '4', '5', '6'];

describe('components/Text', () => {
  describe('base', () => {
    it('no margin', () => {
      cy.mount(<Text as="h1">Hello World</Text>);
      cy.get('h1').should('have.css', 'margin', Test.space('n'));
    });
    it('text color', () => {
      cy.mount(<Text as="h1">Hello World</Text>);
      cy.get('h1').should('have.css', 'color', Test.color('black'));
    });
  });
  describe('as', () => {
    it('h1', () => {
      cy.mount(<Text as="h1">Hello World</Text>);
      cy.get('h1').should('have.css', 'font-size', Test.fontSize('h1'));
      cy.get('h1').should('have.css', 'line-height', Test.lineHeight('6'));
    });
    it('h2', () => {
      cy.mount(<Text as="h2">Hello World</Text>);
      cy.get('h2').should('have.css', 'font-size', Test.fontSize('h2'));
      cy.get('h2').should('have.css', 'line-height', Test.lineHeight('5'));
    });
    it('h3', () => {
      cy.mount(<Text as="h3">Hello World</Text>);
      cy.get('h3').should('have.css', 'font-size', Test.fontSize('h3'));
      cy.get('h3').should('have.css', 'line-height', Test.lineHeight('4'));
    });
    it('h4', () => {
      cy.mount(<Text as="h4">Hello World</Text>);
      cy.get('h4').should('have.css', 'font-size', Test.fontSize('h4'));
      cy.get('h4').should('have.css', 'line-height', Test.lineHeight('3'));
    });
    it('h5', () => {
      cy.mount(<Text as="h5">Hello World</Text>);
      cy.get('h5').should('have.css', 'font-size', Test.fontSize('h5'));
      cy.get('h5').should('have.css', 'line-height', Test.lineHeight('2'));
    });
    it('h6', () => {
      cy.mount(<Text as="h6">Hello World</Text>);
      cy.get('h6').should('have.css', 'font-size', Test.fontSize('h6'));
      cy.get('h6').should('have.css', 'line-height', Test.lineHeight('2'));
    });
    it('p', () => {
      cy.mount(<Text as="p">Hello World</Text>);
      cy.get('p').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('p').should('have.css', 'line-height', Test.lineHeight('1'));
    });
    it('span', () => {
      cy.mount(<Text as="span">Hello World</Text>);
      cy.get('span').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('span').should('have.css', 'line-height', Test.lineHeight('1'));
    });
    it('blockquote', () => {
      cy.mount(<Text as="blockquote">Hello World</Text>);
      cy.get('blockquote').should(
        'have.css',
        'font-size',
        Test.fontSize('body')
      );
      cy.get('blockquote').should(
        'have.css',
        'line-height',
        Test.lineHeight('1')
      );
      cy.get('blockquote').should('have.css', 'margin-left', Test.space('4'));
    });
    it('b', () => {
      cy.mount(<Text as="b">Hello World</Text>);
      cy.get('b').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('b').should('have.css', 'line-height', Test.lineHeight('1'));
    });
    it('small', () => {
      cy.mount(<Text as="small">Hello World</Text>);
      cy.get('small').should('have.css', 'font-size', Test.fontSize('caption'));
      cy.get('small').should('have.css', 'line-height', Test.lineHeight('0'));
    });
    it('del', () => {
      cy.mount(<Text as="del">Hello World</Text>);
      cy.get('del').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('del').should('have.css', 'line-height', Test.lineHeight('1'));
    });
    it('i', () => {
      cy.mount(<Text as="i">Hello World</Text>);
      cy.get('i').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('i').should('have.css', 'line-height', Test.lineHeight('1'));
    });
    it('em', () => {
      cy.mount(<Text as="em">Hello World</Text>);
      cy.get('em').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('em').should('have.css', 'line-height', Test.lineHeight('1'));
    });
  });
  describe('size', () => {
    it('h1 with size p', () => {
      cy.mount(
        <Text as="h1" size="body" weight="normal">
          Hello World
        </Text>
      );
      cy.get('h1').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('h1').should('have.css', 'line-height', Test.lineHeight('1'));
      cy.get('h1').should('have.css', 'font-weight', Test.fontWeight('normal'));
    });
    it('weight overrides size weight', () => {
      cy.mount(
        <Text as="h1" size="body" weight="hairline">
          Hello World
        </Text>
      );
      cy.get('h1').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('h1').should('have.css', 'line-height', Test.lineHeight('1'));
      cy.get('h1').should(
        'have.css',
        'font-weight',
        Test.fontWeight('hairline')
      );
    });
    it('lineHeight overrides size lineHeight', () => {
      cy.mount(
        <Text as="h1" size="body" lineHeight="4">
          Hello World
        </Text>
      );
      cy.get('h1').should('have.css', 'font-size', Test.fontSize('body'));
      cy.get('h1').should('have.css', 'line-height', Test.lineHeight('4'));
    });
  });
  describe('lineHeight', () => {
    allLineHeights.map((lineHeight) =>
      it(lineHeight, () => {
        cy.mount(
          <Text as="p" lineHeight={lineHeight as TextLineHeight}>
            Hello World
          </Text>
        );
        cy.get('p').should(
          'have.css',
          'line-height',
          Test.lineHeight(lineHeight)
        );
      })
    );
  });
  describe('font-weights', () => {
    allWeights.map((weight) =>
      it(weight, () => {
        cy.mount(
          <Text as="p" weight={weight as TextWeight}>
            Hello World
          </Text>
        );
        cy.get('p').should('have.css', 'font-weight', Test.fontWeight(weight));
      })
    );
  });
  it('center', () => {
    cy.mount(
      <Text as="h1" center>
        Hello World
      </Text>
    );
    cy.get('h1').should('have.css', 'text-align', 'center');
  });
  describe('dark mode', () => {
    it('text color', () => {
      cy.darkMount(<Text as="h1">Hello World</Text>);
      cy.get('h1').should('have.css', 'color', Test.color('white'));
    });
  });
});
