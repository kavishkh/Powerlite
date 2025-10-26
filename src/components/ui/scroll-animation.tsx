import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

export const ScrollAnimation = ({
  children,
  className = '',
  animationClass = 'animate-fade-in-up',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
  once = true
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // If we only want to animate once, disconnect the observer
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          // If not once, we can reset the animation when scrolling out
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, once]);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible ? animationClass : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};