import { RefObject, useEffect } from 'react';

type ClickEvent = MouseEvent | TouchEvent;
export const useOnClose = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  clickHandler: (event: ClickEvent) => void,
  keyboardHandler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const clickListener = (event: ClickEvent) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      clickHandler(event); // Call the handler only if the click is outside of the element passed.
    };
    const keyboardListener = (event: KeyboardEvent) => {
      keyboardHandler(event);
    };
    document.addEventListener('mousedown', clickListener);
    document.addEventListener('touchstart', clickListener);
    document.addEventListener('keydown', keyboardListener);
    return () => {
      document.removeEventListener('mousedown', clickListener);
      document.removeEventListener('touchstart', clickListener);
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [ref, clickHandler, keyboardHandler]); // Reload only if ref or handler changes
};
