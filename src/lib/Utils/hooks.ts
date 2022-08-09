import React, { useRef, useEffect } from 'react';

type DOMException = React.MutableRefObject<HTMLElement>;
/**
 * Executes callback function if window is clicked outside of specified element. Exceptions argument allows for other specified elements to be clicked without the callback function executing
 */
export const useClickOutside = (
  handler: () => void,
  exceptions?: Array<React.Ref<HTMLElement | undefined> | undefined>
) => {
  const domNode = useRef<HTMLElement>(null);

  useEffect(() => {
    const conditionalHandler = (e: MouseEvent) => {
      if (
        exceptions !== undefined &&
        (exceptions as Array<DOMException>).length !== 0
      ) {
        (exceptions as Array<DOMException>).map((i) => {
          if (
            i.current &&
            !i.current.isSameNode(e.target as Node) &&
            domNode.current &&
            !domNode.current.contains(e.target as Node)
          ) {
            handler();
          }
        });
      } else {
        if (domNode.current && !domNode.current.contains(e.target as Node)) {
          handler();
        }
      }
    };

    document.addEventListener('mousedown', conditionalHandler);
    return () => {
      document.removeEventListener('mousedown', conditionalHandler);
    };
  });

  return domNode;
};
