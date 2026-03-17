import { useEffect, useRef, useState } from 'react';

/**
 * Wrap any element to make it fade-in when it enters the viewport.
 * @param {number} delay  - delay in ms before the animation starts (for stagger)
 * @param {string} as     - HTML tag to render (default: 'div')
 */
export default function FadeIn({ children, delay = 0, as: Tag = 'div', style = {}, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-box${visible ? ' visible' : ''}${className ? ' ' + className : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
