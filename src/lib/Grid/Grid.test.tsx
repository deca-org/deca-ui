import Grid from '@lib/Grid';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('components/Grid', () => {
  it('renders content', () => {
    const { getByText } = render(
      <Grid.Container>
        <Grid>1</Grid>
        <Grid>2</Grid>
        <Grid>3</Grid>
      </Grid.Container>
    );
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Grid.Container>
        <Grid>1</Grid>
        <Grid>2</Grid>
        <Grid>3</Grid>
      </Grid.Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('all sizes render properly on grid container', () => {
    const { asFragment } = render(
      <Grid.Container n={3} xs={4} sm={2} md={1} lg={12} xl={3}>
        <Grid>1</Grid>
        <Grid>2</Grid>
        <Grid>3</Grid>
      </Grid.Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('all sizes render properly on grid item', () => {
    const { asFragment } = render(
      <Grid.Container>
        <Grid n={3} xs={4} sm={2} md={1} lg={12} xl={3}>
          1
        </Grid>
        <Grid>2</Grid>
        <Grid>3</Grid>
      </Grid.Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
