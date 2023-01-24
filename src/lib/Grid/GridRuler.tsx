import React from 'react';
import { __DEV__ } from '@lib/Utils';
import { StyledGridRuler, StyledGridRulerItem } from './Grid.styles';

/**
 * The GridRuler component is meant to be used as a developer tool to ensure items are lined up correctly on a 12 column grid. For this reason, refs are not forwarded to this component.
 */
export interface Props {
  /**
   * How much spacing there should be between columns.
   */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const GridRuler = ({ spacing = 'sm' }: Props) => {
  return (
    <StyledGridRuler spacing={spacing}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <StyledGridRulerItem key={i} />
      ))}
    </StyledGridRuler>
  );
};

if (__DEV__) {
  GridRuler.displayName = 'DecaUI.GridRuler';
}

export default GridRuler;
