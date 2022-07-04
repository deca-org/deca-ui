import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button
    onClick={() => {
      console.table();
    }}
  >
    hello
  </Button>
);
