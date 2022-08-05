import Checkbox from '@lib/Checkbox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

import CheckboxGroup from './CheckboxGroup';

describe('components/CheckboxGroup', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <CheckboxGroup defaultValue={['A', 'B']}>
        <Checkbox value="A" label="Option A" />
        <Checkbox value="B" label="Option B" />
        <Checkbox value="C" label="Option C" />
        <Checkbox value="D" label="Option D" />
      </CheckboxGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('works as an uncontrolled component', async () => {
    const user = userEvent.setup();
    render(
      <CheckboxGroup defaultValue={['A', 'B']}>
        <Checkbox value="A" label="Option A" />
        <Checkbox value="B" label="Option B" />
        <Checkbox value="C" label="Option C" />
        <Checkbox value="D" label="Option D" />
      </CheckboxGroup>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(screen.getByLabelText('Option C')).toBeChecked();
  });
  it('works as a controlled component', async () => {
    let value = ['A', 'B'];
    const user = userEvent.setup();

    render(
      <CheckboxGroup
        value={value}
        onChange={(e) => (value = [...value, e.target.value])}
      >
        <Checkbox value="A" label="Option A" />
        <Checkbox value="B" label="Option B" />
        <Checkbox value="C" label="Option C" />
        <Checkbox value="D" label="Option D" />
      </CheckboxGroup>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(value).toStrictEqual(['A', 'B', 'C']);
  });
});
