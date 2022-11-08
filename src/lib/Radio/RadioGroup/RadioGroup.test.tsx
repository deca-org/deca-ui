import '@testing-library/jest-dom';
import Radio from '@lib/Radio';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('components/RadioGroup', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Radio.Group defaultValue="A">
        <Radio value="A" label="Option A" />
        <Radio value="B" label="Option B" />
        <Radio value="C" label="Option C" />
        <Radio value="D" label="Option D" />
      </Radio.Group>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('works as an uncontrolled component', async () => {
    const user = userEvent.setup();
    render(
      <Radio.Group defaultValue="A">
        <Radio id="A" value="A" label="Option A" />
        <Radio id="B" value="B" label="Option B" />
        <Radio id="C" value="C" label="Option C" />
        <Radio id="D" value="D" label="Option D" />
      </Radio.Group>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(screen.getByLabelText('Option C')).toBeChecked();
  });
  it('works as a controlled component', async () => {
    let value = 'A';
    const user = userEvent.setup();

    render(
      <Radio.Group
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          (value = e.target.value)
        }
      >
        <Radio id="A" value="A" label="Option A" />
        <Radio id="B" value="B" label="Option B" />
        <Radio id="C" value="C" label="Option C" />
        <Radio id="D" value="D" label="Option D" />
      </Radio.Group>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    await user.click(screen.getByLabelText('Option C'));
    expect(value).toBe('C');
  });
});
