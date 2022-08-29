import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import Text from './Text';

describe('components/Text', () => {
  it('renders content', () => {
    const { getByText } = render(<Text>Children</Text>);
    expect(getByText('Children')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Text></Text>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all variants', () => {
    const { asFragment } = render(
      <>
        <Text as="h1">Children</Text>
        <Text as="h2">Children</Text>
        <Text as="h3">Children</Text>
        <Text as="h4">Children</Text>
        <Text as="h5">Children</Text>
        <Text as="h6">Children</Text>
        <Text as="span">Children</Text>
        <Text as="p">Children</Text>
        <Text as="blockquote">Children</Text>
        <Text as="b">Children</Text>
        <Text as="small">Children</Text>
        <Text as="del">Children</Text>
        <Text as="i">Children</Text>
        <Text as="em">Children</Text>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all sizes', () => {
    const { asFragment } = render(
      <>
        <Text size="h1">Children</Text>
        <Text size="h2">Children</Text>
        <Text size="h3">Children</Text>
        <Text size="h4">Children</Text>
        <Text size="h5">Children</Text>
        <Text size="h6">Children</Text>
        <Text size="body">Children</Text>
        <Text size="bodySm">Children</Text>
        <Text size="caption">Children</Text>
        <Text size="footnote">Children</Text>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders all lineHeights', () => {
    const { asFragment } = render(
      <>
        <Text lineHeight="n">Children</Text>
        <Text lineHeight="0">Children</Text>
        <Text lineHeight="1">Children</Text>
        <Text lineHeight="2">Children</Text>
        <Text lineHeight="3">Children</Text>
        <Text lineHeight="4">Children</Text>
        <Text lineHeight="5">Children</Text>
        <Text lineHeight="6">Children</Text>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders sizes with variants', () => {
    const { asFragment } = render(
      <Text as="h1" size="h2">
        Children
      </Text>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
