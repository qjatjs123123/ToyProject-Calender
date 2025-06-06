import { useEffect, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled || !ref.current) return;
    const handleClickOutside = (event: MouseEvent) => {
      
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
      event.stopPropagation();
    };

    document.addEventListener("mousedown", handleClickOutside, true);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [ref, callback, enabled]);
}
