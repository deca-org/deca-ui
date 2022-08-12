import Button from '@lib/Button';
import Popover from '@lib/Popover';
import { render, fireEvent, act, screen } from '@testing-library/react';
import React from 'react';

describe('components/Popover', () => {
  global.ResizeObserver = require('resize-observer-polyfill');
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>content</Popover.Content>
      </Popover>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('click action', () => {
    const utils = render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>content</Popover.Content>
      </Popover>
    );
    expect(screen.queryByText('content')).toBe(null);
    const popoverTrigger = utils.getByText('Open Popover');
    act(() => {
      popoverTrigger.click();
    });
    expect(screen.queryByText('content')).not.toBe(null);
  });
  it('hover action', async () => {
    const utils = render(
      <Popover action="hover">
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>content</Popover.Content>
      </Popover>
    );
    expect(screen.queryByText('content')).toBe(null);
    const popoverTrigger = utils.getByText('Open Popover');
    act(() => {
      fireEvent.mouseEnter(popoverTrigger);
    });
    expect(screen.queryByText('content')).not.toBe(null);
    act(() => {
      fireEvent.mouseLeave(popoverTrigger);
    });
    await act(async () => new Promise((r) => setTimeout(r, 1000)));
    expect(screen.queryByText('content')).toBe(null);
  });
});
