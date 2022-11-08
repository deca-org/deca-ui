import '@testing-library/jest-dom';
import Checkbox from '@lib/Checkbox';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('components/CheckboxGroup', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Checkbox.Group defaultValue={['A', 'B']}>
        <Checkbox value="A" label="Option A" />
        <Checkbox value="B" label="Option B" />
        <Checkbox value="C" label="Option C" />
        <Checkbox value="D" label="Option D" />
      </Checkbox.Group>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('works as an uncontrolled component', async () => {
    const user = userEvent.setup();
    render(
      <Checkbox.Group defaultValue={['A', 'B']}>
        <Checkbox id="A" value="A" label="Option A" />
        <Checkbox id="B" value="B" label="Option B" />
        <Checkbox id="C" value="C" label="Option C" />
        <Checkbox id="D" value="D" label="Option D" />
      </Checkbox.Group>
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
      <Checkbox.Group
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          (value = [...value, e.target.value])
        }
      >
        <Checkbox id="A" value="A" label="Option A" />
        <Checkbox id="B" value="B" label="Option B" />
        <Checkbox id="C" value="C" label="Option C" />
        <Checkbox id="D" value="D" label="Option D" />
      </Checkbox.Group>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(value).toStrictEqual(['A', 'B', 'C']);
  });
});
