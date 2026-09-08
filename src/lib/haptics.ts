/**
 * Haptic feedback utility for mobile and tablet devices
 * Uses the Web Vibration API with graceful fallbacks
 */

export type HapticType = 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning';

const PATTERNS: Record<HapticType, number | number[]> = {
  selection: 8,
  light: 12,
  medium: 22,
  heavy: 35,
  success: [10, 40, 15],
  warning: [15, 50, 20, 50, 15],
};

export const triggerHaptic = (type: HapticType = 'light') => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

  try {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      navigator.vibrate(PATTERNS[type]);
    }
  } catch {
    // Silently ignore if device doesn't allow or support vibration
  }
};

/**
 * Initializes global touch & click haptic feedback on mobile and tablet devices.
 * Automatically gives every button, tab, drawer trigger, and interactive element
 * satisfying tactile feedback across the entire website.
 */
export const initGlobalHaptics = () => {
  if (typeof window === 'undefined') return;

  const isCoarsePointer = () => {
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
  };

  let lastHapticTime = 0;

  const handlePointerDown = (event: PointerEvent | TouchEvent) => {
    if (!isCoarsePointer()) return;

    const target = (event.target as HTMLElement | null)?.closest(
      'button, a, [role="button"], input[type="submit"], input[type="checkbox"], input[type="radio"], select, summary'
    );

    if (target) {
      const now = performance.now();
      // Debounce slightly to avoid double firing on touch + click
      if (now - lastHapticTime > 80) {
        lastHapticTime = now;
        triggerHaptic('light');
      }
    }
  };

  window.addEventListener('pointerdown', handlePointerDown, { passive: true });

  return () => {
    window.removeEventListener('pointerdown', handlePointerDown);
  };
};
