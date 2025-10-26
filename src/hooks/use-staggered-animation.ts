import { useState, useEffect, useCallback } from 'react';

interface StaggeredAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export const useStaggeredAnimation = (
  items: any[],
  options: StaggeredAnimationOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<Set<string | number>>(new Set());
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    staggerDelay = 100
  } = options;

  const observer = useCallback(() => {
    if (typeof window === 'undefined') return null;
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-animate-id');
            if (itemId) {
              setTimeout(() => {
                setVisibleItems(prev => new Set(prev).add(itemId));
              }, staggerDelay);
            }
          }
        });
      },
      { threshold, rootMargin }
    );
  }, [threshold, rootMargin, staggerDelay]);

  useEffect(() => {
    const obs = observer();
    if (!obs) return;

    // Observe all elements with data-animate-id attribute
    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(el => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, [observer]);

  const resetAnimations = useCallback(() => {
    setVisibleItems(new Set());
  }, []);

  return { visibleItems, resetAnimations };
};