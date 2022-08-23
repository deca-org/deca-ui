import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Grid, { GridContainerProps, Cols } from '.';
import Box from '../Box';

const GridItemBox = ({ children }) => (
  <Box
    css={{
      bg: '$indigo500',
      color: '$white',
      fontFamily: '$normal',
      width: '100%',
      p: '$1',
      textAlign: 'center',
    }}
  >
    {children}
  </Box>
);

const GridComposer = (props: GridContainerProps) => (
  <Grid.Container {...props} data-testid="test.gridContainer">
    <Grid data-testid="test.gridItem1">
      <GridItemBox>Item 1</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem2">
      <GridItemBox>Item 2</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem3">
      <GridItemBox>Item 3</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem4">
      <GridItemBox>Item 4</GridItemBox>
    </Grid>
  </Grid.Container>
);

const OverridePreset = () => (
  <Grid.Container data-testid="test.gridContainer" xs={5}>
    <Grid data-testid="test.gridItem1" xs={6}>
      <GridItemBox>Item 1</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem2">
      <GridItemBox>Item 2</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem3" xs={7}>
      <GridItemBox>Item 3</GridItemBox>
    </Grid>
    <Grid data-testid="test.gridItem4" xs={2}>
      <GridItemBox>Item 4</GridItemBox>
    </Grid>
  </Grid.Container>
);

const containerSelector = '[data-testid="test.gridContainer"]';
const itemSelector = (itemNumber: number) =>
  `[data-testid="test.gridItem${itemNumber}"]`;

const parseFlexBasis = (flexBasisAmount: number) =>
  parseFloat(((flexBasisAmount / 12) * 100).toFixed(4)) + '%';

const containerColCheck = (
  startingBreakpoint: string,
  endBreakpoint: string
) => {
  // default amount of cols is 12 on each breakpoint
  const baseProps: Record<string, Cols> = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  };

  // iterate through column numbers 1-12
  for (let i = 1; i < 13; i++) {
    it(`${i} col(s) applied to all children`, () => {
      cy.viewport(Test.breakpoint(startingBreakpoint) + 200, 500);
      // applying correct cols on target breakpoint
      const composerProps = { ...baseProps, [endBreakpoint]: i };
      cy.baseMount(<GridComposer {...composerProps} />);
      // iterate through how many grid items are in grid composer
      for (let j = 1; j < 5; j++) {
        cy.get(itemSelector(j)).should(
          'have.css',
          'flex-basis',
          parseFlexBasis(i)
        );
      }
    });
  }
};

describe('components/Grid', () => {
  describe('flexbox properties', () => {
    it('flex-wrap', () => {
      cy.baseMount(<GridComposer />);
      cy.get(containerSelector).should('have.css', 'flex-wrap', 'wrap');
    });
    describe('justifyContent', () => {
      it('flex-start', () => {
        cy.baseMount(<GridComposer justifyContent="flex-start" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'flex-start'
        );
      });
      it('center', () => {
        cy.baseMount(<GridComposer justifyContent="center" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'center'
        );
      });
      it('flex-end', () => {
        cy.baseMount(<GridComposer justifyContent="flex-end" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'flex-end'
        );
      });
      it('space-between', () => {
        cy.baseMount(<GridComposer justifyContent="space-between" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'space-between'
        );
      });
      it('space-around', () => {
        cy.baseMount(<GridComposer justifyContent="space-around" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'space-around'
        );
      });
      it('space-evenly', () => {
        cy.baseMount(<GridComposer justifyContent="space-evenly" />);
        cy.get(containerSelector).should(
          'have.css',
          'justifyContent',
          'space-evenly'
        );
      });
    });
    describe('alignItems', () => {
      it('flex-start', () => {
        cy.baseMount(<GridComposer alignItems="flex-start" />);
        cy.get(containerSelector).should(
          'have.css',
          'alignItems',
          'flex-start'
        );
      });
      it('center', () => {
        cy.baseMount(<GridComposer alignItems="center" />);
        cy.get(containerSelector).should('have.css', 'alignItems', 'center');
      });
      it('flex-end', () => {
        cy.baseMount(<GridComposer alignItems="flex-end" />);
        cy.get(containerSelector).should('have.css', 'alignItems', 'flex-end');
      });
    });
  });
  describe('container col(s)', () => {
    describe('xs', () => {
      containerColCheck('n', 'xs');
    });
    describe('sm', () => {
      containerColCheck('xs', 'sm');
    });
    describe('md', () => {
      containerColCheck('sm', 'md');
    });
    describe('lg', () => {
      containerColCheck('md', 'lg');
    });
    describe('xl', () => {
      containerColCheck('lg', 'xl');
    });
  });
  it('individual item props should override contianer props', () => {
    cy.viewport(Test.breakpoint('n') + 200, 500);
    cy.baseMount(<OverridePreset />);
    cy.get(itemSelector(1)).should('have.css', 'flex-basis', parseFlexBasis(6));
    cy.get(itemSelector(2)).should(
      'have.css',
      'flex-basis',
      parseFlexBasis(5) // use default container prop
    );
    cy.get(itemSelector(3)).should('have.css', 'flex-basis', parseFlexBasis(7));
    cy.get(itemSelector(4)).should('have.css', 'flex-basis', parseFlexBasis(2));
  });
  describe('spacing', () => {
    it('none', () => {
      cy.baseMount(<GridComposer spacing="none" />);
      cy.get(containerSelector).should('have.css', 'margin', Test.space('n'));
      for (let i = 1; i < 5; i++) {
        cy.get(itemSelector(i)).should('have.css', 'padding', Test.space('n'));
      }
    });
    it('sm', () => {
      cy.baseMount(<GridComposer spacing="sm" />);
      cy.get(containerSelector).should('have.css', 'margin', Test.space('- 1'));
      for (let i = 1; i < 5; i++) {
        cy.get(itemSelector(i)).should('have.css', 'padding', Test.space('1'));
      }
    });
    it('md', () => {
      cy.baseMount(<GridComposer spacing="md" />);
      cy.get(containerSelector).should('have.css', 'margin', Test.space('- 2'));
      for (let i = 1; i < 5; i++) {
        cy.get(itemSelector(i)).should('have.css', 'padding', Test.space('2'));
      }
    });
    it('lg', () => {
      cy.baseMount(<GridComposer spacing="lg" />);
      cy.get(containerSelector).should('have.css', 'margin', Test.space('- 3'));
      for (let i = 1; i < 5; i++) {
        cy.get(itemSelector(i)).should('have.css', 'padding', Test.space('3'));
      }
    });
  });
});
