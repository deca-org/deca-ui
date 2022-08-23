import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Container from './Container';

describe('components/container', () => {
  const selector = '[data-testid="test.container"]';
  it('fluid', () => {
    cy.mount(
      <Container data-testid="test.container" fluid>
        Content
      </Container>
    );
    cy.get(selector).should('have.css', 'max-width', '100%');
  });
  describe('px', () => {
    it('none', () => {
      cy.mount(
        <Container data-testid="test.container" px="none">
          Content
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('n'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('n'));
    });
    it('sm', () => {
      cy.mount(
        <Container data-testid="test.container" px="sm">
          Content
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('1'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('1'));
    });
    it('md', () => {
      cy.mount(
        <Container data-testid="test.container" px="md">
          Content
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('2'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('2'));
    });
    it('lg', () => {
      cy.mount(
        <Container data-testid="test.container" px="lg">
          Content
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('3'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('3'));
    });
  });
  describe('breakpoints', () => {
    it('xs', () => {
      cy.viewport(Test.breakpoint('xs'), 500);
      cy.mount(<Container data-testid="test.container">Content</Container>);
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('xs') + 'px'
      );
    });
    it('sm', () => {
      cy.viewport(Test.breakpoint('sm'), 500);
      cy.mount(<Container data-testid="test.container">Content</Container>);
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('sm') + 'px'
      );
    });
    it('md', () => {
      cy.viewport(Test.breakpoint('md'), 500);
      cy.mount(<Container data-testid="test.container">Content</Container>);
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('md') + 'px'
      );
    });
    it('lg', () => {
      cy.viewport(Test.breakpoint('lg'), 500);
      cy.mount(<Container data-testid="test.container">Content</Container>);
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('lg') + 'px'
      );
    });
    it('xl', () => {
      cy.viewport(Test.breakpoint('xl'), 500);
      cy.mount(<Container data-testid="test.container">Content</Container>);
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('xl') + 'px'
      );
    });
  });
});
