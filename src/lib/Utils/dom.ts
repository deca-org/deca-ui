import React from 'react';

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null> | React.Ref<T | null>
) {
  const domRef = React.useRef<T>(null);
  React.useImperativeHandle(ref, () => domRef.current);
  return domRef;
}
