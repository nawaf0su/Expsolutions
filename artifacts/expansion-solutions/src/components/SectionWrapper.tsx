import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function SectionWrapper({ id, className = "", style, children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-visible");
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-animate py-20 lg:py-28 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
