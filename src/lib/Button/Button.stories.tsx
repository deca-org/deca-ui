import { Chrome } from '@styled-icons/remix-fill/Chrome';
import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button size="lg" iconRight={<Chrome />}>
    Hello
  </Button>
);
