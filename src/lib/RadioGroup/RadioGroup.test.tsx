import Radio from '@lib/Radio';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

import RadioGroup from './RadioGroup';

describe('components/RadioGroup', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <RadioGroup defaultValue="A">
        <Radio value="A" label="Option A" />
        <Radio value="B" label="Option B" />
        <Radio value="C" label="Option C" />
        <Radio value="D" label="Option D" />
      </RadioGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('works as an uncontrolled component', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="A">
        <Radio value="A" label="Option A" />
        <Radio value="B" label="Option B" />
        <Radio value="C" label="Option C" />
        <Radio value="D" label="Option D" />
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(screen.getByLabelText('Option C')).toBeChecked();
  });
  it('works as a controlled component', async () => {
    let value = 'A';
    const user = userEvent.setup();

    render(
      <RadioGroup value={value} onChange={(e) => (value = e.target.value)}>
        <Radio value="A" label="Option A" />
        <Radio value="B" label="Option B" />
        <Radio value="C" label="Option C" />
        <Radio value="D" label="Option D" />
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(value).toBe('C');
  });
});
