import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current === null || ref.current.contains(e.target)) {
        return;
      }
      callback();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);
};
