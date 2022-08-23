import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Container from './Container';
import Box from '../Box';

const ContainerItem = () => (
  <Box
    css={{
      bg: '$indigo500',
      textAlign: 'center',
      padding: '$3',
      color: '$white',
      br: '$xs',
    }}
  >
    Content
  </Box>
);

const WINDOW_PADDING = 100;

describe('components/container', () => {
  const selector = '[data-testid="test.container"]';
  it('fluid', () => {
    cy.baseMount(
      <Container data-testid="test.container" fluid>
        <ContainerItem />
      </Container>
    );
    cy.get(selector).should('have.css', 'max-width', '100%');
  });
  describe('px', () => {
    it('none', () => {
      cy.baseMount(
        <Container data-testid="test.container" px="none">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('n'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('n'));
    });
    it('sm', () => {
      cy.baseMount(
        <Container data-testid="test.container" px="sm">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('1'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('1'));
    });
    it('md', () => {
      cy.baseMount(
        <Container data-testid="test.container" px="md">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('2'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('2'));
    });
    it('lg', () => {
      cy.baseMount(
        <Container data-testid="test.container" px="lg">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should('have.css', 'padding-left', Test.space('3'));
      cy.get(selector).should('have.css', 'padding-right', Test.space('3'));
    });
  });
  describe('breakpoints', () => {
    it('xs', () => {
      cy.viewport(Test.breakpoint('xs') + WINDOW_PADDING, 500);
      cy.baseMount(
        <Container data-testid="test.container">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('xs') + 'px'
      );
    });
    it('sm', () => {
      cy.viewport(Test.breakpoint('sm') + WINDOW_PADDING, 500);
      cy.baseMount(
        <Container data-testid="test.container">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('sm') + 'px'
      );
    });
    it('md', () => {
      cy.viewport(Test.breakpoint('md') + WINDOW_PADDING, 500);
      cy.baseMount(
        <Container data-testid="test.container">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('md') + 'px'
      );
    });
    it('lg', () => {
      cy.viewport(Test.breakpoint('lg') + WINDOW_PADDING, 500);
      cy.baseMount(
        <Container data-testid="test.container">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('lg') + 'px'
      );
    });
    it('xl', () => {
      cy.viewport(Test.breakpoint('xl') + WINDOW_PADDING, 500);
      cy.baseMount(
        <Container data-testid="test.container">
          <ContainerItem />
        </Container>
      );
      cy.get(selector).should(
        'have.css',
        'max-width',
        Test.breakpoint('xl') + 'px'
      );
    });
  });
});
