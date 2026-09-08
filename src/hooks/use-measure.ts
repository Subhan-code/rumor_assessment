import React, { useState, useEffect } from 'react';
import useMeasureLib from 'react-use-measure';

export interface UseMeasureOptions {
  ref?: React.RefObject<HTMLElement | null>;
}

export function useMeasure(options?: UseMeasureOptions) {
  const [elementRef, bounds] = useMeasureLib();
  const [height, setHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    if (options?.ref?.current) {
      const el = options.ref.current;
      const updateHeight = () => {
        if (el) {
          setHeight(el.getBoundingClientRect().height || el.offsetHeight || 'auto');
        }
      };

      updateHeight();

      const observer = new ResizeObserver(() => {
        updateHeight();
      });

      observer.observe(el);
      return () => observer.disconnect();
    } else if (bounds.height > 0) {
      setHeight(bounds.height);
    }
  }, [options?.ref, bounds.height]);

  // Support both tuple [ref, bounds] and object { height, bounds, ref }
  return Object.assign([elementRef, bounds] as const, {
    height: bounds.height > 0 ? bounds.height : height,
    bounds,
    ref: elementRef,
  });
}

export default useMeasure;
